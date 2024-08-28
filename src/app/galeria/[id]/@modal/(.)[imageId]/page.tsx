import { notFound } from "next/navigation";
import Modal from "./Modal";
import prisma from "@/lib/prisma";

const InterceptedImagePage = async ({
  params,
}: {
  params: { id: string; imageId: string };
}) => {
  const imageSlug = decodeURIComponent(params.imageId);
  const event = await prisma.galleryEvent.findFirst({
    where: {
      slug: params.id,
    },
  });

  if (!event) {
    return notFound();
  }

  const images = event.images;
  const isImageValid = images.includes(imageSlug);
  if (!isImageValid) {
    return notFound();
  }

  return <Modal path={event.path || ""} imageSlug={imageSlug} />;
};

export default InterceptedImagePage;

export async function generateStaticParams() {
  const paths = await prisma.galleryEvent.findMany({
    select: {
      slug: true,
      images: true,
    },
  });

  return paths.map((path) => {
    console.log(
      path.images.map((image) => ({
        id: path.slug,
        imageId: image,
      }))
    );
    return path.images.map((image) => ({
      id: path.slug,
      imageId: image,
    }));
  });
}
