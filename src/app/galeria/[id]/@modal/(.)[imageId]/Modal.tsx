"use client";

import { FaTimes } from "react-icons/fa";
import classes from "./page.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ModalProps {
  path: string;
  imageSlug: string;
}

const Modal: React.FC<ModalProps> = ({ path, imageSlug }) => {
  const router = useRouter();
  console.log("process.env.CLOUDINARY_URL", process.env.CLOUDINARY_URL);
  return (
    <>
      <div
        className={classes.modal__backdrop}
        onClick={() => {
          router.back();
        }}
      ></div>
      <dialog className={classes.modal} open>
        <div className={classes.fullscreen__image}>
          <Image
            src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${path}${imageSlug}`}
            alt="gallery"
            fill
          />
        </div>
      </dialog>
      <FaTimes className={classes.close__icon} onClick={() => router.back()} />
    </>
  );
};

export default Modal;
