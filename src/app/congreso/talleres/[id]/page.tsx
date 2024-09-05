import PageHeading from "@/components/pageHeading/PageHeading";
import BackButton from "@/components/ui/backButton/BackButton";
import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.css";
import React from "react";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import OverviewSlider from "@/components/gallery/overview-slider/OverviewSlider";

interface WorkshopDetailsPageProps {
  params: { id: string };
}

const WorkshopDetailsPage: React.FC<WorkshopDetailsPageProps> = async ({
  params,
}) => {
  const workshopId = params.id;
  const workshop = await prisma.workshop.findFirst({
    where: {
      slug: workshopId,
    },
  });

  if (!workshop) {
    return notFound();
  }

  const { images } = workshop;
  const [, ...restImages] = images;
  return (
    <div className="container">
      <PageHeading title={workshop.title} description={""} />
      <BackButton />

      <div className={classes.details}>
        <div className={classes.details__content}>
          <div className={classes.details__info}>
            <h2>Los talleres que se impartirán son los siguientes:</h2>
            <div dangerouslySetInnerHTML={{ __html: workshop.description }} />
            <p>
              <strong>
                Inscríbete :{" "}
                <a
                  href={workshop.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.details__link}
                >
                  {workshop.registrationLink}
                </a>
              </strong>
              . Antes de proceder a la visita técnica tienes que inscribirte al
              congreso <Link href="/inscripciones">aquí.</Link>
            </p>
            <p>
              <strong>Fecha:</strong>{" "}
              {workshop.date.toLocaleDateString("es-GT", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div className={classes.details__image}>
            <Image
              src={`${process.env.CLOUD_IMAGE_URL}/${workshop.images[0]}`}
              alt="Taller"
              fill
            />
          </div>
        </div>
        <div className={classes.details__images}>
          <OverviewSlider
            images={restImages.map(
              (image) => `${process.env.CLOUD_IMAGE_URL}/${image}`
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkshopDetailsPage;

export async function generateStaticParams() {
  const paths = await prisma.workshop.findMany({
    select: {
      slug: true,
    },
  });

  return paths.map((path) => ({
    id: path.slug,
  }));
}
