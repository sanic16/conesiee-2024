"use client";

import classes from "./imageSlideshow.module.css";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    image: `https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/conesiee/slideshow1/uwq4yco4hem7ugdij1ss`,
    alt: "Hotel Holiday Inn1",
  },
  {
    image: `https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/conesiee/slideshow1/u0e3a7zqxbau1i8ipmmo`,
    alt: "Hotel Holiday Inn2",
  },
  {
    image: `https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/conesiee/slideshow1/rqbjey8x7ivwxhqnaewx`,
    alt: "Hotel Holiday Inn3",
  },
  {
    image: `https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/conesiee/slideshow1/uiquee1af5w2szwrf5kw`,
    alt: "Hotel Holiday Inn4",
  },
  {
    image: `https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/conesiee/slideshow1/esbpwyxqg2zw1oms4kie`,
    alt: "Hotel Holiday Inn5",
  },
  {
    image: `https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/conesiee/slideshow1/y53tzgka9e1b8n8j5ntb`,
    alt: "Hotel Holiday Inn6",
  },
];

const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={image.alt}
          src={image.image}
          alt={image.alt}
          className={index === currentImageIndex ? classes.active : ""}
          fill
        />
      ))}
    </div>
  );
};

export default ImageSlideshow;
