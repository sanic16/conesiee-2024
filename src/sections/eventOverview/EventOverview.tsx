import HomeHeading from "@/components/homeHeading/HomeHeading";
import classes from "./eventOverview.module.css";
import { FaStar } from "react-icons/fa6";
import HomeSubHeading from "@/components/homeSubHeading/HomeSubHeading";
import Image from "next/image";
import hotelImg1 from "@/../public/images/hotel_1.jpeg";
import hotelImg2 from "@/../public/images/hotel_2.jpeg";
import MyCalendar from "./MyCalendar";

const EventOverview = () => {
  return (
    <section className={`container`}>
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
            La ubicación es accesible para estudiantes y profesionales de
            ingeniería eléctrica y electrónica, con espacios adaptados para
            charlas y talleres interactivos.
          </p>
          <p>
            Esta sede fue elegida para fomentar el intercambio de ideas,
            aprendizaje colaborativo y soluciones innovadoras en ingeniería,
            contribuyendo al éxito del evento.
          </p>
        </div>
        <div className={classes.image__container}>
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
      <div className={classes.section__container}>
        <HomeSubHeading title="Enfoque" position="center" icon={FaStar} />
        <p>
          En los congresos de ingeniería eléctrica y electrónica en Guatemala
          para 2024, se destacan tres temas clave que están impulsando el
          desarrollo del sector.
        </p>
        <p>
          <strong>Inteligencia Artificial:</strong> Se presentarán avances en la
          aplicación de IA para mejorar la automatización de sistemas
          eléctricos, permitiendo un control más eficiente y preciso de redes de
          distribución y equipos electrónicos.
        </p>
        <p>
          <strong>Brecha tecnológica post pandemia:</strong> La pandemia aceleró
          la adopción de tecnologías digitales en la educación y en la
          industria. Los congresos abordarán cómo ingenieros pueden adaptarse a
          nuevas herramientas y tecnologías para cerrar esta brecha y mantenerse
          actualizados en un entorno cambiante.
        </p>
        <p>
          <strong>Energías limpias y renovables:</strong> Con el creciente
          enfoque en la sostenibilidad, se explorarán los avances en energías
          renovables, como la solar y eólica, y su integración en los sistemas
          eléctricos del país, con un énfasis en mejorar la eficiencia y el
          almacenamiento energético.
        </p>
      </div>
    </section>
  );
};

export default EventOverview;
