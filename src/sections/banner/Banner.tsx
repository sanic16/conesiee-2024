import Link from "next/link";
import classes from "./banner.module.css";
import bannerImg1 from "@/../public/images/banner_1.jpeg";
import bannerImg2 from "@/../public/images/banner_2.jpg";
import bannerImg3 from "@/../public/images/banner_3.jpg";
import Image from "next/image";
import BannerText from "./BannerText";

const Banner = () => {
  return (
    <section className={`container ${classes.banner}`}>
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
            Del 25 al 27 de septiembre.
          </p>
        </div>
        <div className={classes["banner__btn-wrapper"]}>
          <Link href="/inscripciones">Regístrate</Link>
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
