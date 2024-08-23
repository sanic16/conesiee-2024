import Image from "next/image";
import classes from "./imageGallery.module.css";
import Link from "next/link";

interface ImageGalleryProps {
  images: string[];
  href: string;
  path: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, path, href }) => {
  return (
    <div className={`${classes.gallery}`}>
      {images.map((img) => (
        <Link key={img} href={`${href}/${img}`}>
          <div className={classes.image}>
            <img
              src={`https://conesiee-static.codielectro.com${path}${img}`}
              alt="gallery"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ImageGallery;
