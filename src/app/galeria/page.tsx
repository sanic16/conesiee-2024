import ImageCard from "@/components/gallery/imageCard/ImageCard";
import PageHeading from "@/components/pageHeading/PageHeading";
import classes from "./page.module.css";
import { Metadata } from "next";
import prisma from "@/lib/prisma";

export const metadata: Metadata = {
  title: "CONESIEE | Galería",
  description: "Imágenes de eventos pasados",
};

const page = async () => {
  const data = await prisma.galleryEvent.findMany({});
  const galleryData = data.map((galleryEvent) => ({
    ...galleryEvent,
    date: galleryEvent.date.toLocaleDateString("es-GT", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  }));
  return (
    <>
      <PageHeading title="Galería" description="Imágenes de eventos pasados" />
      <section className={`container ${classes.container}`}>
        <div className={classes.container__bg}>
          <div className={classes.gallery}>
            {galleryData.map((event) => (
              <ImageCard key={event.title} {...event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
