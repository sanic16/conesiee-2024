import PageHeading from "@/components/pageHeading/PageHeading";
import classes from "./page.module.css";
import {
  technicalVisits,
  technicalConferenceVisits,
} from "@/data/technical-visits";
import Link from "next/link";

export default function VisitasPageId({ params }: { params: { id: string } }) {
  console.log(params.id);
  const eventIds = technicalVisits.visits.map((visit) => visit.slug);
  eventIds.push(...technicalConferenceVisits.visits.map((visit) => visit.slug));

  if (!eventIds.includes(params.id)) {
    return <div>El evento no existe</div>;
  }

  let event;

  event = technicalVisits.visits.find((event) => event.slug === params.id);

  if (!event) {
    event = technicalConferenceVisits.visits.find(
      (event) => event.slug === params.id
    );
  }

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
              >
                {event?.registrationLink}
              </a>
            </strong>
            . Antes de proceder a la visita técnica tienes que inscribirte al
            congreso <Link href="/inscripciones">aquí.</Link>
          </p>
          <p>
            <strong>Fecha:</strong> {event?.date}
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
  const ids: string[] = [];
  technicalVisits.visits.forEach((visit) => {
    ids.push(visit.slug);
  });
  technicalConferenceVisits.visits.forEach((visit) => {
    ids.push(visit.slug);
  });

  return ids.map((id) => ({
    id,
  }));
}
