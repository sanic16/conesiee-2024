import React from "react";
import classes from "./image.module.css";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { useTransition } from "react";
import { bannerImageDeleteAction } from "@/actions";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

interface ImageItemProps {
  bannerImage: {
    id: string;
    title: string;
    imageUrl: string;
    publicId: string;
    createdAt: Date;
    updatedAt: Date;
  };
}
const ImageItem: React.FC<ImageItemProps> = ({ bannerImage }) => {
  const [pending, startTransition] = useTransition();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: bannerImage.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleDelete = (id: string, event: React.MouseEvent) => {
    event.stopPropagation();
    startTransition(async () => {
      await bannerImageDeleteAction(id);
    });
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`${classes["banner__image-wrapper"]} `}
      key={bannerImage.id}
    >
      <div key={bannerImage.id} className={classes.banner__image}>
        <Image src={bannerImage.imageUrl} alt={bannerImage.title} fill />
        <button
          className={classes.banner__delete}
          onClick={(event) => handleDelete(bannerImage.id, event)}
          onPointerDown={(event) => event.stopPropagation()}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default ImageItem;
