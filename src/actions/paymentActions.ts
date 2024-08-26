"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { z } from "zod";
import { uploadObject } from "@/utils/aws";
import { cards } from "@/data/payment";
import { revalidatePath } from "next/cache";
import {
  compileContactTemplate,
  compiledStudentTemplate,
  sendMail,
} from "@/mail/mails";

const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];

const validateIndividualPaymentSchema = z.object({
  name: z
    .string()
    .min(5, { message: "El nombre debe tener al menos 5 caracteres" })
    .max(100, {
      message: "El nombre debe tener menos de 100 caracteres",
    }),
  // email: z.string().regex(/^[0-9]{13}@ingenieria\.usac\.edu\.gt$/, {
  //   message: "Correo inválido, formato: 2320556340103@ingenieria.usac.edu.gt",
  // }),
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
  ticketNumber: z.string().min(1, { message: "Número de boleto inválido" }),
});

const validRegistrationPackages = cards.map((card) => card.link.split("/")[2]);

interface IndividualPaymentState {
  errors: {
    name?: string[];
    email?: string[];
    studentId?: string[];
    dpi?: string[];
    phone?: string[];
    career?: string[];
    ticketNumber?: string[];
    paymentProofImage?: string[];
    registrationPackage?: string[];
    _form?: string[];
  };
}

export async function createIndividualPaymentAction(
  { captcha }: { captcha: string | null },
  { registrationPackage }: { registrationPackage: string },
  formState: IndividualPaymentState,
  formData: FormData
): Promise<IndividualPaymentState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const studentId = formData.get("studentId") as string;
  const dpi = formData.get("dpi") as string;
  const phone = formData.get("phone") as string;
  const career = formData.get("career") as string;
  const ticketNumber = formData.get("ticketNumber") as string;
  const paymentProofImage = formData.get("paymentProof") as File;

  const result = validateIndividualPaymentSchema.safeParse({
    name,
    email,
    studentId,
    dpi,
    phone,
    career,
    ticketNumber,
  });

  // Validate form data
  if (!result.success) {
    return {
      errors: {
        ...result.error.flatten().fieldErrors,
        _form: ["Error en el formulario, revisa los campos"],
      },
    };
  }

  if (!validRegistrationPackages.includes(registrationPackage)) {
    return {
      errors: {
        registrationPackage: ["Paquete Inválido"],
        _form: ["Paquete Inválido"],
      },
    };
  }

  // Validate image
  if (!paymentProofImage || paymentProofImage.size === 0) {
    return {
      errors: {
        paymentProofImage: ["Debe subir una imagen del comprobante de pago"],
        _form: ["Debe subir una imagen del comprobante de pago"],
      },
    };
  }

  // Validate image type
  if (!allowedImageTypes.includes(paymentProofImage.type)) {
    return {
      errors: {
        paymentProofImage: ["Tipo de imagen no permitido"],
        _form: ["Tipo de imagen no permitido"],
      },
    };
  }

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

  const htmlContactBody = compileContactTemplate(
    name,
    email,
    registrationPackage
  );

  const htmlStudentBody = compiledStudentTemplate(name);
  try {
    await sendMail({
      to: [
        process.env.MAIL_DEFAULT_ADMIN_1 as string,
        process.env.MAIL_DEFAULT_ADMIN_2 as string,
      ],
      subject: `Nuevo pago de ${name}`,
      body: htmlContactBody,
    });
    await sendMail({
      to: email,
      subject: "Formulario recibido",
      body: htmlStudentBody,
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
        _form: ["Un error ha ocurrido, intente de nuevo más tarde"],
      },
    };
  }

  revalidatePath("/admin/comprobantes");
  redirect("/inscripciones/mensaje");

  return {
    errors: {},
  };
}

const validateComboPaymentSchema = z.object({
  namePerson1: z
    .string()
    .min(5, { message: "El nombre debe tener al menos 5 caracteres" })
    .max(100, {
      message: "El nombre debe tener menos de 100 caracteres",
    }),
  emailPerson1: z.string().email({ message: "Correo inválido" }),
  studentIdPerson1: z
    .string()
    .min(9, { message: "Carné inválido, formato: 201900000" })
    .max(9, { message: "Carné inválido, formato: 201900000" })
    .optional(),
  dpiPerson1: z
    .string()
    .min(13, { message: "DPI inválido, formato: 2320556340103" })
    .max(13, { message: "DPI inválido, formato: 2320556340103" }),
  phonePerson1: z.string().min(8, { message: "Número de teléfono inválido" }),
  careerPerson1: z.string().min(1, { message: "Carrera inválida" }),
  ticketNumberPerson1: z
    .string()
    .min(1, { message: "Número de boleto inválido" }),
  namePerson2: z
    .string()
    .min(5, { message: "El nombre debe tener al menos 5 caracteres" })
    .max(100, {
      message: "El nombre debe tener menos de 100 caracteres",
    }),
  emailPerson2: z.string().email({ message: "Correo inválido" }),
  studentIdPerson2: z
    .string()
    .min(9, { message: "Carné inválido, formato: 201900000" })
    .max(9, { message: "Carné inválido, formato: 201900000" })
    .optional(),
  dpiPerson2: z.string().min(13, { message: "DPI inválido" }).max(13, {
    message: "DPI inválido",
  }),
  phonePerson2: z.string().min(8, { message: "Número de teléfono inválido" }),
  careerPerson2: z.string().min(1, { message: "Carrera inválida" }),
  ticketNumberPerson2: z
    .string()
    .min(1, { message: "Número de boleto inválido" }),
  namePerson3: z
    .string()
    .min(5, { message: "El nombre debe tener al menos 5 caracteres" })
    .max(100, {
      message: "El nombre debe tener menos de 100 caracteres",
    }),
  emailPerson3: z.string().email({ message: "Correo inválido" }),
  studentIdPerson3: z
    .string()
    .min(9, { message: "Carné inválido, formato: 201900000" })
    .max(9, { message: "Carné inválido, formato: 201900000" })
    .optional(),
  dpiPerson3: z.string().min(13, { message: "DPI inválido" }).max(13, {
    message: "DPI inválido",
  }),
  phonePerson3: z.string().min(8, { message: "Número de teléfono inválido" }),
  careerPerson3: z.string().min(1, { message: "Carrera inválida" }),
  ticketNumberPerson3: z
    .string()
    .min(1, { message: "Número de boleto inválido" }),
});

interface CreateComboPaymentState {
  errors: {
    namePerson1?: string[];
    emailPerson1?: string[];
    studentIdPerson1?: string[];
    dpiPerson1?: string[];
    phonePerson1?: string[];
    careerPerson1?: string[];
    registrationPackagePerson1?: string[];
    ticketNumberPerson1?: string[];
    paymentProofImagePerson1?: string[];
    namePerson2?: string[];
    emailPerson2?: string[];
    studentIdPerson2?: string[];
    dpiPerson2?: string[];
    phonePerson2?: string[];
    careerPerson2?: string[];
    registrationPackagePerson2?: string[];
    ticketNumberPerson2?: string[];
    paymentProofImagePerson2?: string[];
    namePerson3?: string[];
    emailPerson3?: string[];
    studentIdPerson3?: string[];
    dpiPerson3?: string[];
    phonePerson3?: string[];
    careerPerson3?: string[];
    registrationPackagePerson3?: string[];
    ticketNumberPerson3?: string[];
    paymentProofImagePerson3?: string[];
    _form?: string[];
  };
}

export async function createComboPaymentAction(
  { captcha }: { captcha: string | null },
  { registrationPackage }: { registrationPackage: string },
  formState: CreateComboPaymentState,
  formData: FormData
): Promise<CreateComboPaymentState> {
  const namePerson1 = formData.get("namePerson1") as string;
  const emailPerson1 = formData.get("emailPerson1") as string;
  const studentIdPerson1 = formData.get("studentIdPerson1") as string;
  const dpiPerson1 = formData.get("dpiPerson1") as string;
  const phonePerson1 = formData.get("phonePerson1") as string;
  const careerPerson1 = formData.get("careerPerson1") as string;
  const ticketNumberPerson1 = formData.get("ticketNumberPerson1") as string;
  const paymentProofImagePerson1 = formData.get("paymentProofPerson1") as File;
  const namePerson2 = formData.get("namePerson2") as string;
  const emailPerson2 = formData.get("emailPerson2") as string;
  const studentIdPerson2 = formData.get("studentIdPerson2") as string;
  const dpiPerson2 = formData.get("dpiPerson2") as string;
  const phonePerson2 = formData.get("phonePerson2") as string;
  const careerPerson2 = formData.get("careerPerson2") as string;
  const ticketNumberPerson2 = formData.get("ticketNumberPerson2") as string;
  const paymentProofImagePerson2 = formData.get("paymentProofPerson2") as File;
  const namePerson3 = formData.get("namePerson3") as string;
  const emailPerson3 = formData.get("emailPerson3") as string;
  const studentIdPerson3 = formData.get("studentIdPerson3") as string;
  const dpiPerson3 = formData.get("dpiPerson3") as string;
  const phonePerson3 = formData.get("phonePerson3") as string;
  const careerPerson3 = formData.get("careerPerson3") as string;
  const ticketNumberPerson3 = formData.get("ticketNumberPerson3") as string;
  const paymentProofImagePerson3 = formData.get("paymentProofPerson3") as File;

  const result = validateComboPaymentSchema.safeParse({
    namePerson1,
    emailPerson1,
    studentIdPerson1,
    dpiPerson1,
    phonePerson1,
    careerPerson1,
    ticketNumberPerson1,
    namePerson2,
    emailPerson2,
    studentIdPerson2,
    dpiPerson2,
    phonePerson2,
    careerPerson2,
    ticketNumberPerson2,
    namePerson3,
    emailPerson3,
    studentIdPerson3,
    dpiPerson3,
    phonePerson3,
    careerPerson3,
    ticketNumberPerson3,
  });

  // Validate form data
  if (!result.success) {
    return {
      errors: {
        ...result.error.flatten().fieldErrors,
        _form: ["Error en el formulario, revisa los campos"],
      },
    };
  }

  // Validate image
  if (!paymentProofImagePerson1 || paymentProofImagePerson1.size === 0) {
    return {
      errors: {
        paymentProofImagePerson1: [
          "Debe subir una imagen del comprobante de pago",
        ],
        _form: ["Debe subir una imagen del comprobante de pago"],
      },
    };
  } else if (!paymentProofImagePerson2 || paymentProofImagePerson2.size === 0) {
    return {
      errors: {
        paymentProofImagePerson2: [
          "Debe subir una imagen del comprobante de pago",
        ],
        _form: ["Debe subir una imagen del comprobante de pago"],
      },
    };
  } else if (!paymentProofImagePerson3 || paymentProofImagePerson3.size === 0) {
    return {
      errors: {
        paymentProofImagePerson3: [
          "Debe subir una imagen del comprobante de pago",
        ],
        _form: ["Debe subir una imagen del comprobante de pago"],
      },
    };
  }

  // Validate image type
  if (!allowedImageTypes.includes(paymentProofImagePerson1.type)) {
    return {
      errors: {
        paymentProofImagePerson1: ["Tipo de imagen no permitido"],
        _form: ["Tipo de imagen no permitido"],
      },
    };
  }

  if (!allowedImageTypes.includes(paymentProofImagePerson2.type)) {
    return {
      errors: {
        paymentProofImagePerson2: ["Tipo de imagen no permitido"],
        _form: ["Tipo de imagen no permitido"],
      },
    };
  }

  if (!allowedImageTypes.includes(paymentProofImagePerson3.type)) {
    return {
      errors: {
        paymentProofImagePerson3: ["Tipo de imagen no permitido"],
        _form: ["Tipo de imagen no permitido"],
      },
    };
  }

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

  const fileBufferPerson1 = await paymentProofImagePerson1.arrayBuffer();
  const buffer = Buffer.from(fileBufferPerson1);

  const imageNamePerson1 = `vouchers/${studentIdPerson1}-${Date.now()}-comprobante.${
    paymentProofImagePerson1.type.split("/")[1]
  }`;

  const fileBufferPerson2 = await paymentProofImagePerson2.arrayBuffer();
  const buffer2 = Buffer.from(fileBufferPerson2);

  const imageNamePerson2 = `vouchers/${studentIdPerson2}-${Date.now()}-comprobante.${
    paymentProofImagePerson2.type.split("/")[1]
  }`;

  const fileBufferPerson3 = await paymentProofImagePerson3.arrayBuffer();
  const buffer3 = Buffer.from(fileBufferPerson3);

  const imageNamePerson3 = `vouchers/${studentIdPerson3}-${Date.now()}-comprobante.${
    paymentProofImagePerson3.type.split("/")[1]
  }`;

  // Upload Image
  try {
    await uploadObject(buffer, imageNamePerson1, paymentProofImagePerson1.type);
    await uploadObject(
      buffer2,
      imageNamePerson2,
      paymentProofImagePerson2.type
    );
    await uploadObject(
      buffer3,
      imageNamePerson3,
      paymentProofImagePerson3.type
    );
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

  // Save student 1 payment
  try {
    await prisma.studentPayment.create({
      data: {
        email: emailPerson1,
        name: namePerson1,
        studentId: studentIdPerson1,
        dpi: dpiPerson1,
        phone: phonePerson1,
        career: careerPerson1,
        registrationPackage: registrationPackage,
        ticketNumber: ticketNumberPerson1,
        imageUrl: `https://conesiee-static.codielectro.com/${imageNamePerson1}`,
      },
    });

    await prisma.studentPayment.create({
      data: {
        email: emailPerson2,
        name: namePerson2,
        studentId: studentIdPerson2,
        dpi: dpiPerson2,
        phone: phonePerson2,
        career: careerPerson2,
        registrationPackage: registrationPackage,
        ticketNumber: ticketNumberPerson2,
        imageUrl: `https://conesiee-static.codielectro.com/${imageNamePerson2}`,
      },
    });

    await prisma.studentPayment.create({
      data: {
        email: emailPerson3,
        name: namePerson3,
        studentId: studentIdPerson3,
        dpi: dpiPerson3,
        phone: phonePerson3,
        career: careerPerson3,
        registrationPackage: registrationPackage,
        ticketNumber: ticketNumberPerson3,
        imageUrl: `https://conesiee-static.codielectro.com/${imageNamePerson3}`,
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

  const htmlContactBodyPerson1 = compileContactTemplate(
    namePerson1,
    emailPerson1,
    registrationPackage
  );

  const htmlStudentBodyPerson1 = compiledStudentTemplate(namePerson1);

  const htmlContactBodyPerson2 = compileContactTemplate(
    namePerson2,
    emailPerson2,
    registrationPackage
  );
  const htmlStudentBodyPerson2 = compiledStudentTemplate(namePerson2);

  const htmlContactBodyPerson3 = compileContactTemplate(
    namePerson3,
    emailPerson3,
    registrationPackage
  );
  const htmlStudentBodyPerson3 = compiledStudentTemplate(namePerson3);

  try {
    await sendMail({
      to: [
        process.env.MAIL_DEFAULT_ADMIN_1 as string,
        process.env.MAIL_DEFAULT_ADMIN_2 as string,
      ],
      subject: `Nuevo pago de ${namePerson1}`,
      body: htmlContactBodyPerson1,
    });
    await sendMail({
      to: emailPerson1,
      subject: "Formulario recibido",
      body: htmlStudentBodyPerson1,
    });

    await sendMail({
      to: [
        process.env.MAIL_DEFAULT_ADMIN_1 as string,
        process.env.MAIL_DEFAULT_ADMIN_2 as string,
      ],
      subject: `Nuevo pago de ${namePerson2}`,
      body: htmlContactBodyPerson2,
    });
    await sendMail({
      to: emailPerson2,
      subject: "Formulario recibido",
      body: htmlStudentBodyPerson2,
    });

    await sendMail({
      to: [
        process.env.MAIL_DEFAULT_ADMIN_1 as string,
        process.env.MAIL_DEFAULT_ADMIN_2 as string,
      ],
      subject: `Nuevo pago de ${namePerson3}`,
      body: htmlContactBodyPerson3,
    });
    await sendMail({
      to: emailPerson3,
      subject: "Formulario recibido",
      body: htmlStudentBodyPerson3,
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
        _form: ["Un error ha ocurrido, intente de nuevo más tarde"],
      },
    };
  }

  revalidatePath("/admin/comprobantes");
  redirect("/inscripciones/mensaje");

  return {
    errors: {},
  };
}
