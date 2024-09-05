import PageHeading from "@/components/pageHeading/PageHeading";
import classes from "./page.module.css";
import React from "react";
import Image from "next/image";
import { cloudinaryUrl } from "@/utils/constants";
import BackButton from "@/components/ui/backButton/BackButton";
import ScheduleTable from "@/components/scheduleTable/ScheduleTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Itinerario | Congreso Internacional de Energía Renovable",
  description:
    "Descubre el itinerario del congreso y planifica tu participación.",
};

export default function CongressCalendar() {
  return (
    <div className="container">
      <PageHeading
        title="Itinerario"
        description="Descubre el itinerario del congreso y planifica tu participación."
      />

      <div
        className={classes.itinerario__container}
        style={{ overflow: "hidden" }}
      >
        <BackButton />

        <div
          className={classes.itinerario__content}
          style={{ overflow: "hidden" }}
        >
          <ScheduleTable />
        </div>
      </div>
    </div>
  );
}
