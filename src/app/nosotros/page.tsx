import aboutImg1 from "@/../public/images/about_img_1.jpeg";
import aboutImg2 from "@/../public/images/about_img_2.jpeg";
import aboutImg3 from "@/../public/images/about_img_3.jpeg";
import SimpleHeading from "@/components/simpleHeading/SimpleHeading";
import Image from "next/image";
import classes from "./page.module.css";
import { Metadata } from "next";
import Organization from "./Organization";
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
      desc: "Promover el aprendizaje y el desarrollo de habilidades en tecnología, ciencia y áreas relacionadas para estudiantes y entusiastas.",
    },
    {
      id: 2,
      title: "Social",
      desc: "Fomentar la interacción y el intercambio de ideas entre estudiantes de diferentes escuelas, facultades y universidades para fortalecer la comunidad en pro de la ingeniería.",
    },
    {
      id: 3,
      title: "Laboral",
      desc: "Impulsar el crecimiento profesional al conectar a estudiantes y aficionados con el mundo laboral en ingeniería y tecnología.",
    },
  ];
  return (
    <>
      <BannerCongress
        title="Nosotros"
        description="Somos una entidad sin ánimo de lucro enfocada en impulsar el avance de la Ingeniería Eléctrica y Electrónica en Guatemala."
        image="conesiee/congress/jvnrrwip3brwjtwlptco"
      />
      <section className={`container ${classes.container}`}>
        {/* <PageHeading
        title="Nosotros"
        description="Somos una organización sin fines de lucro que busca fomentar el desarrollo de la Ingenería Eléctrica y Electrónica en Guatemala."
      /> */}
        <div className={classes.container__bg} id="mision">
          <div className={classes.box}>
            <SimpleHeading
              title="Misión"
              description="Organizar un congreso que permita a los participantes profundizar sus conocimientos y fortalecer su interés en favor del medio ambiente y el avance tecnológico, promoviendo iniciativas y prácticas sostenibles en el ámbito de la ingeniería y la innovación."
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

          <div className={classes.box} id="vision">
            <SimpleHeading
              title="Visión"
              description="Ser reconocidos por nuestra excelencia como comité organizador de congresos en la Escuela de Ingeniería Mecánica Eléctrica, destacándonos por nuestra dedicación, calidad y compromiso en la creación de eventos académicos y profesionales de alto impacto."
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
          <div className={classes.box} id="objetivos">
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
      </section>
    </>
  );
};

export default page;
