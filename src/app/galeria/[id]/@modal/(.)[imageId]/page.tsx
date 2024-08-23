"use client";
import { notFound } from "next/navigation";
import classes from "./page.module.css";
import galleryData from "@/data/gallery";
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";

const InterceptedImagePage = ({
  params,
}: {
  params: { id: string; imageId: string };
}) => {
  const router = useRouter();

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

  return (
    <>
      <div
        className={classes.modal__backdrop}
        onClick={() => {
          router.back();
        }}
      ></div>
      <dialog className={classes.modal} open>
        <div className={classes.fullscreen__image}>
          <img
            src={`https://conesiee-static.codielectro.com${event?.path}${imageSlug}`}
            alt="gallery"
          />
        </div>
      </dialog>
      <FaTimes className={classes.close__icon} onClick={() => router.back()} />
    </>
  );
};

export default InterceptedImagePage;
