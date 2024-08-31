"use client";
import React from "react";
import classes from "./bannerGallery.module.css";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import ImageItem from "./image-item/ImageItem";
import { bannerImageUpdateOrderAction } from "@/actions/bannerActions";
import { useTransition } from "react";

interface BannerGalleryProps {
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

const BannerGallery: React.FC<BannerGalleryProps> = ({ bannerImgs }) => {
  const [bannerImages, setBannerImages] = React.useState(bannerImgs);
  const [pending, startTransition] = useTransition();

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={(event) => {
        const { active, over } = event;

        setBannerImages((bannerImages) => {
          const oldIndex = bannerImages.findIndex(
            (bannerImg) => bannerImg.id === active.id
          );

          const newIndex = bannerImages.findIndex(
            (person) => person.id === over!.id
          );
          return arrayMove(bannerImages, oldIndex, newIndex);
        });
        startTransition(async () => {
          await bannerImageUpdateOrderAction(bannerImages);
        });
      }}
    >
      <SortableContext
        items={bannerImages}
        strategy={horizontalListSortingStrategy}
      >
        <div className={classes.banner__gallery}>
          {bannerImages.map((bannerImg) => (
            <ImageItem key={bannerImg.id} bannerImage={bannerImg} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default BannerGallery;
