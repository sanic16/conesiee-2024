import Link from "next/link";
import classes from "./banner.module.css";

import Image from "next/image";
import prisma from "@/lib/prisma";

const Banner = async () => {
  const bannerImages = await prisma.banner.findMany({
    take: 3,
    orderBy: {
      createdAt: "asc",
    },
  });
  return (
    <div className={`container ${classes.banner}`}>
      <div className={classes.banner__content}>
        <div className={classes.banner__right}>
          <h1>
            <span>CONESIEE 2024</span>
          </h1>
          <h3>
            Congreso Nacional de Estudiantes de Ingeniería{" "}
            <span>Eléctrica </span>y <span>Electrónica</span>
          </h3>
          {/* <BannerText className={classes["banner__right-text"]} /> */}
          <p className={classes["banner__right-text"]}>
            Del 23 al 27 de septiembre.
          </p>
        </div>
        <div className={classes["banner__btn-wrapper"]}>
          <Link href="/inscripciones">Inscríbete</Link>
        </div>
      </div>
      <div className={classes.slideshow}>
        <div className={classes.slideshow__wrapper}>
          {bannerImages.map((bannerImg) => (
            <div className={classes.slide} key={bannerImg.id}>
              <Image src={bannerImg.imageUrl} alt="banner 1" fill />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
