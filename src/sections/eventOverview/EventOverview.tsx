import HomeHeading from "@/components/homeHeading/HomeHeading";
import classes from "./eventOverview.module.css";
import { FaStar } from "react-icons/fa6";
import HomeSubHeading from "@/components/homeSubHeading/HomeSubHeading";
import Image from "next/image";
import hotelImg1 from "@/../public/images/hotel_1.jpeg";
import hotelImg2 from "@/../public/images/hotel_2.jpeg";
import horusImg from "@/../public/images/horus.jpg";
import sanAntonioImg from "@/../public/images/san_antonio.jpg";
import guateSur from "@/../public/images/guate_sur.jpg";
import Link from "next/link";
import { technicalConferenceVisits } from "@/data/technical-visits";

const visitasTecnicas = [
  "Taller INTECAP",
  "Eólica San Antonio",
  "Alimentos S.A.",
  "Ingenio Santa Ana",
  "Ingenio Magdalena",
  "Ingenio Madre Tierra",
  "Ingenio San Diego",
  "Taller ITUGS",
];

const EventOverview = () => {
  return (
    <div className={`container ${classes.container}`} id="detallesEvento">
      <div className={classes.container__bg}>
        <HomeHeading
          title="Detalles del evento"
          description="Descubre los detalles del evento más importante para estudiantes y profesionales de ingeniería eléctrica, electrónica y mecatrónica en Guatemala."
        />

        {/* Sede */}
        <div className={`${classes.section__container} ${classes.grid}`}>
          <div className={classes.content__container}>
            <HomeSubHeading title="Sede" position="left" icon={FaStar} />
            <p>
              El evento se llevará a cabo en el Hotel Holiday Inn, zona 10 de
              Ciudad de Guatemala, con un salón moderno y equipado, ideal para
              congresos y conferencias.
            </p>
            <p>
              Esta sede fue elegida para fomentar el intercambio de ideas,
              aprendizaje colaborativo y soluciones innovadoras en ingeniería,
              contribuyendo al éxito del evento.
            </p>
          </div>
          <div className={`${classes.image__container} ${classes.flex}`}>
            <div className={classes.image__wrapper}>
              <Image
                src={hotelImg1}
                alt="Hotel Holiday Inn"
                width={hotelImg1.width * (2 / 3)}
                height={hotelImg1.height * (2 / 3)}
              />
            </div>
            <div className={classes.image__wrapper}>
              <Image
                src={hotelImg2}
                alt="Hotel Holiday Inn"
                width={hotelImg2.width * (2 / 3)}
                height={hotelImg2.height * (2 / 3)}
              />
            </div>
          </div>
        </div>

        {/* Sede */}
        <div className={`${classes.section__container} ${classes.grid2}`}>
          <div className={`${classes.image__container} ${classes.gridImg}`}>
            <div className={classes.image__wrapper}>
              <Image src={horusImg} alt="Hotel Horus" width={150} />
            </div>
            <div className={classes.image__wrapper}>
              <Image src={sanAntonioImg} alt="Hotel Horus" width={150} />
            </div>
            <div className={classes.image__wrapper}>
              <Image src={guateSur} alt="Hotel Horus" width={150} />
            </div>
          </div>
          <div className={classes.content__container}>
            <HomeSubHeading title="Enfoque" position="center" icon={FaStar} />
            <p>
              Los congresos y talleres se enfocarán en tres áreas principales:
            </p>
            <p>
              <strong>Inteligencia Artificial:</strong> Se discutirán
              aplicaciones de IA en la automatización y optimización de sistemas
              eléctricos.
            </p>
            <p>
              <strong>Brecha tecnológica post pandemia:</strong> Se analizarán
              los desafíos tecnológicos en la educación y el trabajo en
              ingeniería eléctrica post pandemia.
            </p>
            <p>
              <strong>Energías limpias y renovables:</strong> Se explorarán
              avances en el uso de energías renovables dentro del sector
              eléctrico.
            </p>
          </div>
        </div>

        {/* Visitas Técnicas */}
        <div
          className={`${classes.section__container} ${classes.visitas__container}`}
        >
          <div className={classes.content__container}>
            <HomeSubHeading
              title="Visitas Técnicas de Semana de Congresos"
              position="center"
              icon={FaStar}
            />
            <p>
              Durante la semana de congresos, se realizarán visitas técnicas a
              empresas líderes en el sector eléctrico y electrónico en
              Guatemala.
            </p>

            <div className={classes.visitas}>
              {technicalConferenceVisits.visits.map((visit) => (
                <Link
                  key={`${visit.slug}-${visit.date}`}
                  href={`/visitas/${visit.slug}`}
                >
                  {visit.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className={classes.info}>
          Puedes ver el programa completo{" "}
          <Link href="/congreso/itinerario">aquí.</Link>
        </p>
      </div>
    </div>
  );
};

export default EventOverview;
