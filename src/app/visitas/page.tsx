import PageHeading from "@/components/pageHeading/PageHeading";
import classes from "./page.module.css";
import VisitsImageCard from "@/components/gallery/imageCard/VisitsImageCard";

import {
  technicalVisits,
  technicalConferenceVisits,
} from "@/data/technical-visits";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CONESIEE | Visitas Técnicas",
  description: "Visitas técnicas realizadas y programadas para los congresos.",
};

const page = () => {
  return (
    <>
      <PageHeading
        title="Visitas Técnicas"
        description="A continuación se detallan las visitas técnicas realizadas y las programadas tanto para congresos como para visitas pre-congreso:"
      />
      <section className={`container ${classes.container}`}>
        <div className={classes.container__bg}>
          <h2 className={classes.heading}>Actividades Pre-Congreso</h2>
          <div className={classes.gallery}>
            {technicalVisits.visits.map((event) => (
              <VisitsImageCard
                key={event.title}
                noCongress
                {...event}
                description={event.shortDescription}
              />
            ))}
          </div>
          <div>
            <h2 className={classes.heading}>Actividades para los congresos</h2>
            <div className={classes.gallery}>
              {technicalConferenceVisits.visits.map((event) => (
                <VisitsImageCard
                  key={event.title}
                  {...event}
                  description={event.shortDescription}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
