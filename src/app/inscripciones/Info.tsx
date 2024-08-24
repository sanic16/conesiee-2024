import HomeHeading from "@/components/homeHeading/HomeHeading";
import classes from "./info.module.css";
import Link from "next/link";

const cards = [
  {
    id: 1,
    title: "Estudiantes USAC Simple",
    description: "Sin Cena de Gala",
    price: "Q400",
    link: "/inscripciones/usac-simple",
  },
  {
    id: 2,
    title: "Estudiantes USAC Completo",
    description: "Con Cena de Gala",
    price: "Q500",
    link: "/inscripciones/usac-completo",
  },
  {
    id: 3,
    title: "Combo Estudiantes USAC",
    description: "3 personas + Cena de Gala",
    price: "Q1350",
    link: "/inscripciones/usac-combo",
  },
  {
    id: 4,
    title: "Day Pass USAC",
    description: "Solo un día de actividades",
    price: "Q200",
    link: "/inscripciones/usac-day-pass",
  },
  {
    id: 5,
    title: "Externos Simple",
    description: "Sin Cena de Gala",
    price: "Q500",
    link: "/inscripciones/externos-simple",
  },
  {
    id: 6,
    title: "Externos Completo",
    description: "Con Cena de Gala",
    price: "Q600",
    link: "/inscripciones/externos-completo",
  },
  {
    id: 7,
    title: "Combo Externos",
    description: "3 personas + Cena de Gala",
    price: "Q1650",
    link: "/inscripciones/externos-combo",
  },
  {
    id: 8,
    title: "Day Pass Externos",
    description: "Solo un día de actividades",
    price: "Q250",
    link: "/inscripciones/externos-day-pass",
  },
];

const Info = () => {
  return (
    <div className={classes.info__container}>
      {/* <HomeHeading title="Información de inscripción" description="" /> */}
      <div className={classes.info}>
        {cards.map((card) => {
          return (
            <div key={card.id} className={classes.card}>
              <div className={classes.card__bg}>
                <div className={classes.content}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <p>
                    <strong>Precio:</strong> {card.price}
                  </p>
                  <Link href={card.link} className="btn primary">
                    Inscribirse
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
