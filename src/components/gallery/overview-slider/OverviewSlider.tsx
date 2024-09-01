"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import img1 from "@/../public/images/guate_sur.jpg";
import img2 from "@/../public/images/san_antonio.jpg";
import img3 from "@/../public/images/horus.jpg";
import classes from "./overviewSlider.module.css";
import Image from "next/image";
import "swiper/css"; // Add Swiper's core styles
import "swiper/css/navigation"; // Add Navigation styles
import "swiper/css/pagination"; // Add Pagination styles

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
        {[img1, img2, img3].map((img, index) => (
          <SwiperSlide key={index}>
            <div className={classes.image__wrapper}>
              <Image src={img} alt={`slide-${index}`} objectFit="cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OverviewSlider;
