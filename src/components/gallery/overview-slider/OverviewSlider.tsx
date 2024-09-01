"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import img1 from "@/../public/images/virtual.webp";
import img2 from "@/../public/images/chixoy.jpg";
import img3 from "@/../public/images/horus.jpg";
import img4 from "@/../public/images/jurun.png";
import img5 from "@/../public/images/usac.jpg";
import img6 from "@/../public/images/guatemala.png";
import classes from "./overviewSlider.module.css";
import Image from "next/image";
import "swiper/css"; // Add Swiper's core styles
import "swiper/css/navigation"; // Add Navigation styles
import "swiper/css/pagination"; // Add Pagination styles
import "./custom.css";

const OverviewSlider = () => {
  return (
    <div className={classes.swiper__container}>
      <Swiper
        navigation
        pagination={{ type: "fraction" }}
        modules={[Navigation, Pagination]}
        className={classes.swiper}
        spaceBetween={0}
        slidesPerView={1}
        loop
      >
        {[img4, img2, img3, img5, img1, img6].map((img, index) => (
          <SwiperSlide key={index}>
            <div className={classes.image__wrapper}>
              <Image
                src={img}
                alt={`slide-${index}`}
                objectFit="cover"
                width={25 * 16}
                height={12 * 16}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OverviewSlider;
