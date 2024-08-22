"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { auth } from "@/auth";
import { uploadObject } from "@/utils/aws";

const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];

const validateSingleStudentPaymentSchema = z.object({
  name: z
    .string()
    .min(5, { message: "El nombre debe tener al menos 5 caracteres" })
    .max(100, {
      message: "El nombre debe tener menos de 100 caracteres",
    }),
  email: z.string().regex(/^[0-9]{13}@ingenieria\.usac\.edu\.gt$/, {
    message: "Correo inválido, formato: 2320556340103@ingenieria.usac.edu.gt",
  }),
  studentId: z
    .string()
    .min(9, { message: "Carné inválido, formato: 201900000" })
    .max(9, { message: "Carné inválido, formato: 201900000" }),
  dpi: z
    .string()
    .min(13, { message: "DPI inválido, formato: 2320556340103" })
    .max(13, { message: "DPI inválido, formato: 2320556340103" }),
  phone: z.string().min(8, { message: "Número de teléfono inválido" }),
  career: z.string().min(1, { message: "Carrera inválida" }),
  registrationPackage: z.string().min(1, { message: "Paquete inválido" }),
  ticketNumber: z.string().min(1, { message: "Número de boleto inválido" }),
});

interface CreateStudentPaymentState {
  errors: {
    name?: string[];
    email?: string[];
    studentId?: string[];
    dpi?: string[];
    phone?: string[];
    career?: string[];
    registrationPackage?: string[];
    ticketNumber?: string[];
    paymentProofImage?: string[];
    _form?: string[];
  };
}

export async function createSingleStudentPaymentAction(
  { captcha }: { captcha: string | null },
  formState: CreateStudentPaymentState,
  formData: FormData
): Promise<CreateStudentPaymentState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const studentId = formData.get("studentId") as string;
  const dpi = formData.get("dpi") as string;
  const phone = formData.get("phone") as string;
  const career = formData.get("career") as string;
  const registrationPackage = formData.get("registrationPackage") as string;
  const ticketNumber = formData.get("ticketNumber") as string;
  const paymentProofImage = formData.get("paymentProof") as File;

  const result = validateSingleStudentPaymentSchema.safeParse({
    name,
    email,
    studentId,
    dpi,
    phone,
    career,
    registrationPackage,
    ticketNumber,
  });

  // Validate form data
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Validate image
  if (!paymentProofImage || paymentProofImage.size === 0) {
    return {
      errors: {
        paymentProofImage: ["Debe subir una imagen del comprobante de pago"],
      },
    };
  }

  // Validate image type
  if (!allowedImageTypes.includes(paymentProofImage.type)) {
    return {
      errors: {
        paymentProofImage: ["Tipo de imagen no permitido"],
      },
    };
  }
  console.log(captcha);
  // Validate captcha
  if (captcha === null) {
    return {
      errors: {
        _form: ["Por favor, verifica que no eres un robot"],
      },
    };
  }

  const captchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SITE_SECRET}&response=${captcha}`
  );

  const captchaData = await captchaResponse.json();

  if (!captchaData.success) {
    return {
      errors: {
        _form: ["Captcha inválido"],
      },
    };
  }

  const fileBuffer = await paymentProofImage.arrayBuffer();
  const buffer = Buffer.from(fileBuffer);

  const imageName = `vouchers/${studentId}-${Date.now()}-comprobante.${
    paymentProofImage.type.split("/")[1]
  }`;

  // Upload Image
  try {
    await uploadObject(buffer, imageName, paymentProofImage.type);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    }
    return {
      errors: {
        _form: ["Error al subir la imagen, intente de nuevo más tarde"],
      },
    };
  }

  // Save student payment
  try {
    await prisma.studentPayment.create({
      data: {
        email,
        name,
        studentId,
        dpi,
        phone,
        career,
        registrationPackage,
        ticketNumber,
        imageUrl: `https://conesiee-static.codielectro.com/${imageName}`,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    }

    return {
      errors: {
        _form: ["Error al guardar el pago, intente de nuevo más tarde"],
      },
    };
  }

  redirect("/");

  return {
    errors: {},
  };
}

const validateExternalStudentPaymentSchema = z.object({
  name: z
    .string()
    .min(5, { message: "El nombre debe tener al menos 5 caracteres" })
    .max(100, {
      message: "El nombre debe tener menos de 100 caracteres",
    }),
  email: z.string().email({ message: "Correo inválido" }),
  studentId: z
    .string()
    .min(9, { message: "Carné inválido, formato: 201900000" })
    .max(9, { message: "Carné inválido, formato: 201900000" }),
  dpi: z
    .string()
    .min(13, { message: "DPI inválido, formato: 2320556340103" })
    .max(13, { message: "DPI inválido, formato: 2320556340103" }),
  phone: z.string().min(8, { message: "Número de teléfono inválido" }),
  career: z.string().min(1, { message: "Carrera inválida" }),
  registrationPackage: z.string().min(1, { message: "Paquete inválido" }),
  ticketNumber: z.string().min(1, { message: "Número de boleto inválido" }),
});

interface CreateStudentPaymentState {
  errors: {
    name?: string[];
    email?: string[];
    studentId?: string[];
    dpi?: string[];
    phone?: string[];
    career?: string[];
    registrationPackage?: string[];
    ticketNumber?: string[];
    paymentProofImage?: string[];
    _form?: string[];
  };
}

// export async function createSingleStudentPaymentAction(
//   { captcha }: { captcha: string | null },
//   formState: CreateStudentPaymentState,
//   formData: FormData
// ): Promise<CreateStudentPaymentState> {
//   const name = formData.get("name") as string;
//   const email = formData.get("email") as string;
//   const studentId = formData.get("studentId") as string;
//   const dpi = formData.get("dpi") as string;
//   const phone = formData.get("phone") as string;
//   const career = formData.get("career") as string;
//   const registrationPackage = formData.get("registrationPackage") as string;
//   const ticketNumber = formData.get("ticketNumber") as string;
//   const paymentProofImage = formData.get("paymentProof") as File;

//   const result = validateSingleStudentPaymentSchema.safeParse({
//     name,
//     email,
//     studentId,
//     dpi,
//     phone,
//     career,
//     registrationPackage,
//     ticketNumber,
//   });

//   // Validate form data
//   if (!result.success) {
//     return {
//       errors: result.error.flatten().fieldErrors,
//     };
//   }

//   // Validate image
//   if (!paymentProofImage || paymentProofImage.size === 0) {
//     return {
//       errors: {
//         paymentProofImage: ["Debe subir una imagen del comprobante de pago"],
//       },
//     };
//   }

//   // Validate image type
//   if (!allowedImageTypes.includes(paymentProofImage.type)) {
//     return {
//       errors: {
//         paymentProofImage: ["Tipo de imagen no permitido"],
//       },
//     };
//   }
//   console.log(captcha);
//   // Validate captcha
//   if (captcha === null) {
//     return {
//       errors: {
//         _form: ["Por favor, verifica que no eres un robot"],
//       },
//     };
//   }

//   const captchaResponse = await fetch(
//     `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SITE_SECRET}&response=${captcha}`
//   );

//   const captchaData = await captchaResponse.json();

//   if (!captchaData.success) {
//     return {
//       errors: {
//         _form: ["Captcha inválido"],
//       },
//     };
//   }

//   const fileBuffer = await paymentProofImage.arrayBuffer();
//   const buffer = Buffer.from(fileBuffer);

//   const imageName = `vouchers/${studentId}-${Date.now()}-comprobante.${
//     paymentProofImage.type.split("/")[1]
//   }`;

//   // Upload Image
//   try {
//     await uploadObject(buffer, imageName, paymentProofImage.type);
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       return {
//         errors: {
//           _form: [error.message],
//         },
//       };
//     }
//     return {
//       errors: {
//         _form: ["Error al subir la imagen, intente de nuevo más tarde"],
//       },
//     };
//   }

//   // Save student payment
//   try {
//     await prisma.studentPayment.create({
//       data: {
//         email,
//         name,
//         studentId,
//         dpi,
//         phone,
//         career,
//         registrationPackage,
//         ticketNumber,
//         imageUrl: `https://conesiee-static.codielectro.com/${imageName}`,
//       },
//     });
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       return {
//         errors: {
//           _form: [error.message],
//         },
//       };
//     }

//     return {
//       errors: {
//         _form: ["Error al guardar el pago, intente de nuevo más tarde"],
//       },
//     };
//   }

//   redirect("/");

//   return {
//     errors: {},
//   };
// }
