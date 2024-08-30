"use client";
import Image from "next/image";
import React from "react";
import { FaTrash } from "react-icons/fa6";
import classes from "./bannerGallery.module.css";
import { useTransition } from "react";
import { start } from "repl";
import { bannerImageDeleteAction } from "@/actions";

interface BannerGalleryProps {
  bannerImgs: {
    id: string;
    title: string;
    imageUrl: string;
    publicId: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

const BannerGallery: React.FC<BannerGalleryProps> = ({ bannerImgs }) => {
  const [state, startTransition] = useTransition();

  const handleDelete = (id: string) => {
    startTransition(async () => {
      await bannerImageDeleteAction(id);
    });
  };

  return (
    <div className={classes.banner__gallery}>
      {bannerImgs.map((bannerImg, key) => (
        <div
          className={`${classes["banner__image-wrapper"]} ${
            key < 3 ? classes.active : ""
          }`}
          key={bannerImg.id}
        >
          <div key={bannerImg.id} className={classes.banner__image}>
            <Image src={bannerImg.imageUrl} alt={bannerImg.title} fill />
            <button
              className={classes.banner__delete}
              onClick={() => handleDelete(bannerImg.id)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerGallery;
