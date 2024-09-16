"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import classes from "./overviewSlider.module.css";
import Image from "next/image";
import "swiper/css"; // Add Swiper's core styles
import "swiper/css/navigation"; // Add Navigation styles
import "swiper/css/pagination"; // Add Pagination styles
import "./custom.css";

interface ImageObject {
  src: string;
  width: number;
  height: number;
}

interface OverviewSliderProps {
  images: string[] | ImageObject[];
  autoPlay?: boolean;
}

const OverviewSlider: React.FC<OverviewSliderProps> = ({
  images,
  autoPlay,
}) => {
  // Type guard to check if images is an array of strings
  const isStringArray = (arr: any[]): arr is string[] =>
    arr.every((item) => typeof item === "string");

  return (
    <div className={classes.swiper__container}>
      <Swiper
        navigation
        pagination={{ type: "fraction" }}
        modules={[Navigation, Pagination, Autoplay]}
        className={classes.swiper}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={
          autoPlay ? { delay: 5000, disableOnInteraction: false } : false
        }
        loop
      >
        {isStringArray(images)
          ? // Handling images as an array of strings
            images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className={classes.image__wrapper}>
                  <Image
                    src={img}
                    alt={`slide-${index}`}
                    fill
                    sizes="(max-width: 1024px) 400px, (max-width: 576px) 320px"
                  />
                </div>
              </SwiperSlide>
            ))
          : // Handling images as an array of ImageObject
            images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className={classes.image__gallery}>
                  <Image
                    src={img.src}
                    alt={`slide-${index}`}
                    width={768}
                    height={img.height}
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default OverviewSlider;
