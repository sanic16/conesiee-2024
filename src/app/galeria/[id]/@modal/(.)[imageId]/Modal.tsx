"use client";

import { FaTimes } from "react-icons/fa";
import classes from "./page.module.css";
import { useRouter } from "next/navigation";

interface ModalProps {
  path: string;
  imageSlug: string;
}

const Modal: React.FC<ModalProps> = ({ path, imageSlug }) => {
  const router = useRouter();

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
          <img
            src={`https://conesiee-static.codielectro.com${path}${imageSlug}`}
            alt="gallery"
          />
        </div>
      </dialog>
      <FaTimes className={classes.close__icon} onClick={() => router.back()} />
    </>
  );
};

export default Modal;
