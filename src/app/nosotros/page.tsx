import aboutImg1 from "@/../public/images/about_img_1.jpeg";
import aboutImg2 from "@/../public/images/about_img_2.jpeg";
import aboutImg3 from "@/../public/images/about_img_3.jpeg";
import SimpleHeading from "@/components/simpleHeading/SimpleHeading";
import Image from "next/image";
import classes from "./page.module.css";
import { Metadata } from "next";
import PageHeading from "@/components/pageHeading/PageHeading";
import HomeHeading from "@/components/homeHeading/HomeHeading";
import Organization from "./Organization";
import PageHeader from "@/components/pageHeader/PageHeader";
import BannerCongress from "@/components/bannerCongress/BannerCongress";

export const metadata: Metadata = {
  title: "CONESIEE | Nosotros",
  description: "Más sobre nosotros",
};

const page = () => {
  const objectives = [
    {
      id: 1,
      title: "Académico",
      desc: "Enriquecer el conocimiento de los estudiantes y aficionados a la tecnología, ciencia y otras ramas.",
    },
    {
      id: 2,
      title: "Social",
      desc: "Generar convivencia entre estudiantes de distintas escuelas, facultades, universidades y de otras áreas en favor de la ingeniería.",
    },
    {
      id: 3,
      title: "Laboral",
      desc: "Enriquecer el conocimiento de los estudiantes y aficionados a la tecnología, ciencia y otras ramas.",
    },
  ];
  return (
    <>
      <BannerCongress
        title="Nosotros"
        description="Somos una organización sin fines de lucro que busca fomentar el desarrollo de la Ingenería Eléctrica y Electrónica en Guatemala."
        image="conesiee/congress/h9gslw4piovk5j32jmqi"
      />
      <div className={`container ${classes.container}`}>
        {/* <PageHeading
        title="Nosotros"
        description="Somos una organización sin fines de lucro que busca fomentar el desarrollo de la Ingenería Eléctrica y Electrónica en Guatemala."
      /> */}

        <div className={classes.box}>
          <SimpleHeading
            title="Misión"
            description="Realizar un congreso en el cual los participantes amplíen sus conocimientos e
interés en pro del medio ambiente y desarrollo tecnológico."
            className={classes.simpleHeading}
          />
          <div className={classes.img__wrapper}>
            <Image
              src={aboutImg1}
              alt="about image 3"
              width={aboutImg1.width / 2}
              height={aboutImg1.height / 2}
            />
          </div>
        </div>

        <div className={classes.box}>
          <SimpleHeading
            title="Visión"
            description="Excelencia como comité organizador de congresos de la escuela de
ingeniería mecánica eléctrica.
"
            className={classes.simpleHeading}
          />
          <div className={classes.img__wrapper}>
            <Image
              src={aboutImg2}
              alt="about image 2"
              width={aboutImg2.width / 2}
              height={aboutImg2.height / 2}
            />
          </div>
        </div>
        <div className={classes.box}>
          <SimpleHeading
            title="Objetivos"
            description={objectives}
            className={classes.simpleHeading}
          />
          <div className={classes.img__wrapper}>
            <Image
              src={aboutImg3}
              alt="about image 3"
              width={aboutImg3.width / 2}
              height={aboutImg3.height / 2}
            />
          </div>
        </div>

        <Organization />
      </div>
    </>
  );
};

export default page;
