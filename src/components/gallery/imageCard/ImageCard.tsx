import Link from "next/link";
import classes from "./imageCard.module.css";
import Image from "next/image";

interface GalleryData {
  title: string;
  description: string;
  date: string;
  slug: string;
  images: string[];
}

const ImageCard: React.FC<GalleryData> = ({
  title,
  description,
  date,
  slug,
  images,
}) => {
  return (
    <article key={title} className={classes.card}>
      <div className={classes.card__content}>
        <h3 className={classes.card__title}>{title}</h3>
        <p className={classes.card__description}>{description}</p>
        <p className={classes.card__date}>{date}</p>
        <Link href={`/galeria/${slug}`} className="btn whitesmoke">
          Ver más
        </Link>
      </div>
      <div className={classes.card__img}>
        <img
          src={`https://conesiee-static.codielectro.com${images[0]}`}
          alt="gallery"
        />
      </div>
    </article>
  );
};

export default ImageCard;
