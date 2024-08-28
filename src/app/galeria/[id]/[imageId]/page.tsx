import { notFound } from "next/navigation";
import classes from "./page.module.css";
import prisma from "@/lib/prisma";
import Image from "next/image";

const page = async ({
  params,
}: {
  params: { id: string; imageId: string };
}) => {
  const imageSlug = decodeURIComponent(params.imageId);
  // const isIdValid = galleryData.events
  //   .map((event) => event.slug)
  //   .includes(params.id);
  const isIdValid = await prisma.galleryEvent.findFirst({
    where: {
      slug: params.id,
    },
  });

  const images = await prisma.galleryEvent.findMany({
    select: {
      images: true,
    },
  });

  if (!isIdValid) {
    return notFound();
  }

  // const event = galleryData.events.find((event) => event.slug === params.id);
  // const isImageValid = event?.images.includes(`${imageSlug}`);
  // if (!isImageValid) {
  //   return notFound();
  // }

  const event = await prisma.galleryEvent.findFirst({
    where: {
      slug: params.id,
    },
  });

  if (!event) {
    return notFound();
  }

  const isImageValid = images
    .map((image) => image.images)
    .flat()
    .includes(imageSlug);

  if (!isImageValid) {
    return notFound();
  }

  return (
    <div className="container">
      <div className={`${classes.image__container}`}>
        <Image
          src={`${process.env.CLOUDINARY_URL}${event.path}${imageSlug}`}
          alt="gallery"
          fill
        />
      </div>
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  // const paths = galleryData.events.map((event) => {
  //   return event.images.map((image) => ({
  //     params: {
  //       id: event.slug,
  //       imageId: image,
  //     },
  //   }));
  // });

  // return paths.flat();
  const paths = await prisma.galleryEvent.findMany({
    select: {
      slug: true,
      images: true,
    },
  });

  return paths.map((path) => {
    // console.log(
    //   path.images.map((image) => ({
    //     id: path.slug,
    //     imageId: image,
    //   }))
    // );
    return path.images.map((image) => ({
      id: path.slug,
      imageId: image,
    }));
  });
}
