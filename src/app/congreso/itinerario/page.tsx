import PageHeading from "@/components/pageHeading/PageHeading";
import classes from "./page.module.css";
import React from "react";
import Image from "next/image";
import { cloudinaryUrl } from "@/utils/constants";

export default function CongressCalendar() {
  return (
    <div className="container">
      <PageHeading
        title="Itinerario"
        description="Descubre el itinerario del congreso y planifica tu participación."
      />
      <div className={classes.itinerario__container}>
        <div className={classes.itinerario__content}>
          <Image
            src={`${cloudinaryUrl}/conesiee/congress/ghcs4gmdwksdazi2jwo6`}
            alt="Itinerario"
            fill
          />
        </div>
      </div>
    </div>
  );
}
