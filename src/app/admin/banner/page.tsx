import PageHeading from "@/components/pageHeading/PageHeading";
import classes from "./page.module.css";
import prisma from "@/lib/prisma";
import Image from "next/image";
import { FaTrash } from "react-icons/fa6";
import FormButton from "@/components/formButton/FormButton";
import { useFormState } from "react-dom";
import { bannerImageUploadAction } from "@/actions";
import BannerUpload from "./BannerUpload";
import BannerGallery from "./banner-gallery/BannerGallery";

export default async function BannerAdminPage() {
  const bannerImgs = await prisma.banner.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <>
      <PageHeading title="Administrar Banner" description="" />
      <section className={`container ${classes.container}`}>
        <BannerGallery bannerImgs={bannerImgs} />
        <BannerUpload />
      </section>
      ;
    </>
  );
}
