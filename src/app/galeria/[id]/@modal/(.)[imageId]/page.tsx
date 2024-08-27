import { notFound } from "next/navigation";
import galleryData from "@/data/gallery";
import Modal from "./Modal";

const InterceptedImagePage = ({
  params,
}: {
  params: { id: string; imageId: string };
}) => {
  const imageSlug = decodeURIComponent(params.imageId);
  const isIdValid = galleryData.events
    .map((event) => event.slug)
    .includes(params.id);

  if (!isIdValid) {
    return notFound();
  }

  const event = galleryData.events.find((event) => event.slug === params.id);
  const isImageValid = event?.images.includes(`${imageSlug}`);
  if (!isImageValid) {
    return notFound();
  }

  return <Modal path={event?.path || ""} imageSlug={imageSlug} />;
};

export default InterceptedImagePage;

export async function generateStaticParams() {
  const paths = galleryData.events.map((event) => {
    return event.images.map((image) => ({
      params: {
        id: event.slug,
        imageId: image,
      },
    }));
  });

  return paths.flat();
}
