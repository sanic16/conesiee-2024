import Link from "next/link";
import classes from "./imageCard.module.css";
import Image from "next/image";
import { cloudinaryUrl } from "@/utils/constants";

interface GalleryData {
  title: string;
  description: string;
  date: string;
  slug: string;
  path: string;
  images: string[];
}

const ImageCard: React.FC<GalleryData> = ({
  title,
  description,
  date,
  slug,
  path,
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
        <Image
          src={`${cloudinaryUrl}${path}${images[0]}`}
          alt="gallery"
          fill
          sizes="(max-width: 1280px) 300px, 300px"
        />
      </div>
    </article>
  );
};

export default ImageCard;
