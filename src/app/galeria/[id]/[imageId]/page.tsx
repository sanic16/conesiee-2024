import { notFound } from "next/navigation";
import classes from "./page.module.css";
import galleryData from "@/data/gallery";

const page = ({ params }: { params: { id: string; imageId: string } }) => {
  console.log(params);

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
    <div className="container">
      <div className={`${classes.image__container}`}>
        <img
          src={`https://conesiee-static.codielectro.com${event?.path}${imageSlug}`}
          alt="gallery"
        />
      </div>
    </div>
  );
};

export default page;
