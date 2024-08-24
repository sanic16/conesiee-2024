import ImageCard from "@/components/gallery/imageCard/ImageCard";
import PageHeading from "@/components/pageHeading/PageHeading";
import galleryData from "@/data/gallery";
import classes from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CONESIEE | Galería",
  description: "Imágenes de eventos pasados",
};

const page = () => {
  return (
    <section className={`container ${classes.container}`}>
      <div className={classes.container__bg}>
        <PageHeading
          title="Galería"
          description="Imágenes de eventos pasados"
        />
        <div className={classes.gallery}>
          {galleryData.events.map((event) => (
            <ImageCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
