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
        <Link key={img} href={`${href}/${img}`} className={classes.image__link}>
          <div className={classes.image}>
            <Image
              src={`${process.env.CLOUDINARY_URL}${path}${img}`}
              alt="gallery"
              fill
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ImageGallery;
