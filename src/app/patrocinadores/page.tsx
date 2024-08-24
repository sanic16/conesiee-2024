import PageHeading from "@/components/pageHeading/PageHeading";
import { Metadata } from "next";
import classes from "./page.module.css";
import Sponsors from "./Sponsors";

export const metadata: Metadata = {
  title: "Patrocinadores",
  description: "Conoce a las empresas que hacen posible el congreso.",
};

export default function SponsorsPage() {
  return (
    <section className={`container ${classes.container}`}>
      <div className={classes.container__bg}>
        <PageHeading
          title="Patrocinadores"
          description="Conoce a las empresas que hacen posible el congreso."
        />
        <Sponsors />
      </div>
    </section>
  );
}
