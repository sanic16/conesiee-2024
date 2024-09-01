import PageHeading from "@/components/pageHeading/PageHeading";
import classes from "./page.module.css";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { TechnicalVisitEvent } from "@prisma/client";

export default async function VisitasPageId({
  params,
}: {
  params: { id: string };
}) {
  const eventSlugIds = await prisma.technicalVisitEvent.findMany({
    select: {
      slug: true,
    },
  });

  const eventIds = eventSlugIds.map((event) => event.slug);

  if (!eventIds.includes(params.id)) {
    return <div>El evento no existe</div>;
  }

  let event: TechnicalVisitEvent | null =
    await prisma.technicalVisitEvent.findFirst({
      where: {
        slug: params.id,
      },
    });

  return (
    <div className="container">
      <PageHeading title={event?.title!} description={""} />
      <Link href="/visitas" className="btn primary">
        Regresar
      </Link>
      <div className={classes.details__container}>
        <div className={classes.details__content}>
          <p>{event?.description}</p>
          <p>
            <strong>
              Inscríbete :{" "}
              <a
                href={event?.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.details__link}
              >
                {event?.registrationLink}
              </a>
            </strong>
            . Antes de proceder a la visita técnica tienes que inscribirte al
            congreso <Link href="/inscripciones">aquí.</Link>
          </p>
          <p>
            <strong>Fecha:</strong>{" "}
            {event?.date.toLocaleDateString("es-GT", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div className={classes.details__image}>
          <img
            src={`https://conesiee-static.codielectro.com${
              event?.images[1] || event?.images[0]
            }`}
            alt={event?.title}
          />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const ids = await prisma.technicalVisitEvent.findMany({
    select: {
      slug: true,
    },
  });

  return ids.map((id) => {
    return {
      id: id.slug,
    };
  });
}
