"use server";
import prisma from "@/lib/prisma";
import { uploadImage } from "@/lib/cloudinary";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
    const lastBanner = await prisma.banner.findFirst({
      orderBy: {
        order: "desc",
      },
    });
    await prisma.banner.create({
      data: {
        imageUrl: imageUrl,
        title: image.name,
        publicId: imageUrl,
        order: lastBanner ? lastBanner.order + 1 : 4,
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
  redirect("/admin/perfil");

  return {
    errors: {},
  };
}

interface BannerImages {
  id: string;
  title: string;
  imageUrl: string;
  order: number;
  publicId: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function bannerImageUpdateOrderAction(
  bannerImages: BannerImages[]
): Promise<void> {
  await Promise.all(
    bannerImages.map((bannerImage) =>
      prisma.banner.update({
        where: { id: bannerImage.id },
        data: { order: bannerImage.order },
      })
    )
  );

  revalidatePath("/admin/banner");
  revalidatePath("/");
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
