import Link from "next/link";
import classes from "./imageCard.module.css";
import Image from "next/image";

interface GalleryData {
  title: string;
  description: string;
  date: string;
  slug: string;
  images: string[];
  registrationLink?: string;
  noCongress?: boolean;
}

const VisitsImageCard: React.FC<GalleryData> = ({
  title,
  description,
  date,
  slug,
  images,
  noCongress,
  registrationLink,
}) => {
  const now = new Date();
  const visitDate = new Date(date);

  const isPast = visitDate < now;

  return (
    <article
      key={title}
      className={`${classes.card} ${classes.visit} ${
        noCongress && classes.no__congress
      }`}
    >
      <div className={classes.card__content}>
        <h3 className={classes.card__title}>{title}</h3>
        <p className={classes.card__description}>{description}</p>
        <p className={classes.card__date}>{date}</p>
        <div className={classes.actions}>
          <Link href={`/visitas/${slug}`} className="btn whitesmoke">
            Ver más
          </Link>
          <Link
            href={registrationLink || ""}
            className="btn gold"
            rel="noopener noreferrer"
            target="_blank"
          >
            Inscribirse
          </Link>
        </div>
      </div>
      <div className={classes.card__img}>
        <Image
          src={`https://d34wp28s47tr6p.cloudfront.net${images[0]}`}
          alt="gallery"
          sizes="(max-width: 1280px) 500px"
          fill
        />
      </div>
    </article>
  );
};

export default VisitsImageCard;
