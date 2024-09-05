import WorkshopCard from "@/components/gallery/workshopCard/WorkshopCard";
import PageHeading from "@/components/pageHeading/PageHeading";
import prisma from "@/lib/prisma";
import classes from "./page.module.css";
import BackButton from "@/components/ui/backButton/BackButton";

export default async function WorkshopsPage() {
  const workshops = await prisma.workshop.findMany({
    orderBy: {
      date: "asc",
    },
  });
  return (
    <>
      <PageHeading
        title="TALLERES"
        description="A continuación se detallan los talleres programados para el congreso:"
      />
      <section className={`container`}>
        <BackButton />
        <div className={classes.workshops}>
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      </section>
    </>
  );
}
