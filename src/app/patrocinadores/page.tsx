import PageHeading from "@/components/pageHeading/PageHeading";
import { Metadata } from "next";
import React from "react";
import Sponsors from "./Sponsors";

export const metadata: Metadata = {
  title: "Patrocinadores",
  description: "Conoce a las empresas que hacen posible el congreso.",
};

export default function SponsorsPage() {
  return (
    <div className="container">
      <PageHeading
        title="Patrocinadores"
        description="Conoce a las empresas que hacen posible el congreso."
      />
      <Sponsors />
    </div>
  );
}
