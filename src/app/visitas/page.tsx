import PageHeading from "@/components/pageHeading/PageHeading";
import classes from "./page.module.css";
import VisitsImageCard from "@/components/gallery/imageCard/VisitsImageCard";

// import {
//   technicalVisits,
//   technicalConferenceVisits,
// } from "@/data/technical-visits";
import { Metadata } from "next";
import prisma from "@/lib/prisma";

export const metadata: Metadata = {
  title: "CONESIEE | Visitas Técnicas",
  description: "Visitas técnicas realizadas y programadas para los congresos.",
};

// const orderedByDateTechnicalConferenceVisits =
//   technicalConferenceVisits.visits.sort(
//     (a, b) => new Date(a.date).getDate() - new Date(b.date).getDate()
//   );

const page = async () => {
  const technicalVisits = await prisma.technicalVisitEvent.findMany({
    where: {
      isFromCongress: false,
    },
  });
  const congressTechnicalVisits = await prisma.technicalVisitEvent.findMany({
    where: {
      isFromCongress: true,
    },
    orderBy: {
      date: "asc",
    },
  });

  return (
    <>
      <PageHeading
        title="Visitas Técnicas"
        description="A continuación se detallan las visitas técnicas realizadas y las programadas tanto para congresos como para visitas pre-congreso:"
      />
      <section className={`container ${classes.container}`}>
        <div className={classes.container__bg}>
          <h2 className={classes.heading}>Actividades para los congresos</h2>
          <div className={classes.gallery}>
            {congressTechnicalVisits.map((event, index) => (
              <VisitsImageCard
                {...event}
                date={event.date.toLocaleDateString("es-GT", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                description={event.shortDescription}
                key={index + event.date.getMilliseconds()}
              />
            ))}
          </div>
          <h2 className={classes.heading}>Actividades Pre-Congreso</h2>
          <div className={classes.gallery}>
            {technicalVisits.map((event, index) => (
              <VisitsImageCard
                key={index}
                noCongress
                title={event.title}
                date={event.date.toLocaleDateString("es-GT", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                images={event.images}
                slug={event.slug}
                registrationLink={event.registrationLink}
                description={event.shortDescription}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
