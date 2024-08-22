import Image from "next/image";
import classes from "./imageGallery.module.css";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className={`${classes.gallery}`}>
      {images.map((img) => (
        <div key={img} className={classes.image}>
          <Image
            src={`https://conesiee-static.codielectro.com${img}`}
            alt="gallery"
            fill
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
