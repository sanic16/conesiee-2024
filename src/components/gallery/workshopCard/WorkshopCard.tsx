import { Workshop } from "@prisma/client";
import classes from "./workshopCard.module.css";
import Link from "next/link";
import Image from "next/image";

interface WorkshopCardProps {
  workshop: Workshop;
}
const WorkshopCard: React.FC<WorkshopCardProps> = ({ workshop }) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__content}>
        <h3 className={classes.card__title}>{workshop.title}</h3>
        <p className={classes.card__description}>
          {workshop.portalDescription}
        </p>
        <p className={classes.card__date}>
          {workshop.date.toLocaleDateString("es-GT", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <div className={classes.actions}>
          <Link
            href={`/congreso/talleres/${workshop.slug}`}
            className="btn whitesmoke"
          >
            Ver más
          </Link>
          <a
            href={workshop.registrationLink || ""}
            className="btn gold"
            rel="noopener noreferrer"
            target="_blank"
          >
            Inscribirse
          </a>
        </div>
      </div>
      <div className={classes.card__img}>
        <Image
          src={`${process.env.CLOUD_IMAGE_URL}/${workshop.images[0]}`}
          alt="gallery"
          fill
        />
      </div>
    </div>
  );
};

export default WorkshopCard;
