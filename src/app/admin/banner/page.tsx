import PageHeading from "@/components/pageHeading/PageHeading";
import classes from "./page.module.css";
import prisma from "@/lib/prisma";
import BannerUpload from "./BannerUpload";
import BannerGallery from "./banner-gallery/BannerGallery";
import BannerWrapper from "./banner-wrapper/BannerWrapper";

export default async function BannerAdminPage() {
  const bannerImgs = await prisma.banner.findMany({
    orderBy: {
      order: "asc",
    },
  });

  return (
    <>
      <PageHeading title="Administrar Banner" description="" />
      <section className={`container ${classes.container}`}>
        <BannerWrapper bannerImgs={bannerImgs} />
      </section>
    </>
  );
}
