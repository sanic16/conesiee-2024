"use server";
import prisma from "@/lib/prisma";
import { uploadImage } from "@/lib/cloudinary";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];

interface BannerImageUploadState {
  errors: {
    _form?: string[];
  };
}

export async function bannerImageUploadAction(
  formState: BannerImageUploadState,
  formData: FormData
): Promise<BannerImageUploadState> {
  const image = formData.get("image");

  if (!(image instanceof File) || image.size === 0) {
    return {
      errors: {
        _form: ["La imagen no es válida"],
      },
    };
  }

  if (!allowedImageTypes.includes(image.type)) {
    return {
      errors: {
        _form: ["El tipo de imagen no es válido"],
      },
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["No tienes permisos para subir una imagen"],
      },
    };
  }

  let imageUrl: string;
  try {
    imageUrl = await uploadImage(image);
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
        _form: ["Error al subir la imagen"],
      },
    };
  }

  try {
    await prisma.banner.create({
      data: {
        imageUrl: imageUrl,
        title: image.name,
        publicId: imageUrl,
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
        _form: ["Error al guardar la imagen, intenta de nuevo"],
      },
    };
  }

  revalidatePath("/admin/banner");
  revalidatePath("/");

  return {
    errors: {},
  };
}

export async function bannerImageDeleteAction(id: string): Promise<void> {
  await prisma.banner.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/admin/banner");
  revalidatePath("/");
}
