import BackButton from "@/components/ui/backButton/BackButton";
import classes from "./page.module.css";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

interface ConferenceProps {
  params: {
    id: string;
  };
}

export default async function ConferenceDetails({ params }: ConferenceProps) {
  const conference = await prisma.conference.findUnique({
    where: {
      slug: params.id,
    },
  });

  if (!conference) {
    return notFound();
  }

  return (
    <section className="container">
      <BackButton />
      <div className={classes.conferencia}>
        <div className={classes.contenido}>
          <h2 className={classes.titulo}>{conference.title}</h2>
          <h3 className={classes.subtitulo}>
            Organizado por: {conference.company}
          </h3>

          <div className={classes.info}>
            <h3 className={classes.infoTitulo}>Fecha y Hora:</h3>
            <p className={classes.infoTexto}>
              {conference.day} - {conference.hour}
            </p>
          </div>

          <div className={classes.orador}>
            <h3 className={classes.oradorTitulo}>
              Presentado por: {conference.speaker}
            </h3>
            <p className={classes.oradorCV}>{conference.speakerCV}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const paths = await prisma.conference.findMany({
    select: {
      slug: true,
    },
  });

  return paths.map((path) => ({
    id: path.slug,
  }));
}
