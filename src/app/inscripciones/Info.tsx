import { cards } from "@/data/payment";
import classes from "./info.module.css";
import Link from "next/link";

const Info = () => {
  const goldOptionId = 1;
  const silverOptionId = 2;
  const bronzeOptionId = 3;
  return (
    <div className={classes.info__container}>
      {/* <HomeHeading title="Información de inscripción" description="" /> */}
      <div className={classes.info}>
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              className={`${classes.card} ${
                goldOptionId === card.id ? classes.gold : ""
              } ${silverOptionId === card.id ? classes.silver : ""} ${
                bronzeOptionId === card.id ? classes.bronze : ""
              }`}
            >
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
