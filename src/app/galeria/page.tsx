import ImageCard from "@/components/gallery/imageCard/ImageCard";
import PageHeading from "@/components/pageHeading/PageHeading";
import galleryData from "@/data/gallery";
import classes from "./page.module.css";

const page = () => {
  return (
    <div className={`container`}>
      <PageHeading title="Galería" description="Imágenes de eventos pasados" />
      <div className={classes.gallery}>
        {galleryData.events.map((event) => (
          <ImageCard key={event.title} {...event} />
        ))}
      </div>
    </div>
  );
};

export default page;
