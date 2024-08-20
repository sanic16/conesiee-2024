import Link from "next/link";
import classes from "./banner.module.css";
import bannerImg1 from "@/../public/images/banner_1.jpeg";
import bannerImg2 from "@/../public/images/banner_2.jpg";
import bannerImg3 from "@/../public/images/banner_3.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <section className={`container ${classes.banner}`}>
      <div className={classes.banner__content}>
        <div className={classes.banner__right}>
          <h1>
            CONESIEE 2024 - Congreso Nacional de Estudiantes de Ingeniería
            Eléctrica y Electrónica
          </h1>
        </div>
        <div className={classes.banner__btn}>
          <button>
            <Link href="/inscripciones">Inscripciones</Link>
          </button>
        </div>
      </div>
      <div className={classes.slideshow}>
        <div className={classes.slideshow__wrapper}>
          <div className={classes.slide}>
            <Image src={bannerImg2} alt="banner 1" />
          </div>
          <div className={classes.slide}>
            <Image src={bannerImg3} alt="banner 1" />
          </div>
          <div className={classes.slide}>
            <Image src={bannerImg1} alt="banner 1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
