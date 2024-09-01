"use client";

import React from "react";
import BannerGallery from "../banner-gallery/BannerGallery";
import BannerUpload from "../BannerUpload";

interface BannerWrapperProps {
  bannerImgs: {
    id: string;
    title: string;
    imageUrl: string;
    publicId: string;
    order: number;
    createdAt: Date;
    updatedAt: Date;
  }[];
}
const BannerWrapper: React.FC<BannerWrapperProps> = ({ bannerImgs }) => {
  if (typeof window !== "undefined") {
    if (window.innerWidth < 1200) {
      return (
        <h2>
          Para administrar el banner, por favor usa una pantalla más grande
        </h2>
      );
    }
  }
  return (
    <>
      <BannerGallery bannerImgs={bannerImgs} />
      <BannerUpload />
    </>
  );
};

export default BannerWrapper;
