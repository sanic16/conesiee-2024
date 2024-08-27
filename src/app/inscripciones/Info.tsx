import { paymentOptions } from "@/data/payment";
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
        {paymentOptions.map((option) => {
          return (
            <div
              key={option.id}
              className={`${classes.card} ${
                goldOptionId === option.id ? classes.gold : ""
              } ${silverOptionId === option.id ? classes.silver : ""} ${
                bronzeOptionId === option.id ? classes.bronze : ""
              }`}
            >
              <div className={classes.card__bg}>
                <div className={classes.content}>
                  <h3>{option.title}</h3>
                  <div className={classes.card__footer}>
                    <div className={classes.card__btn}>
                      <Link
                        href={option.link}
                        className="btn primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Inscribirse
                      </Link>
                    </div>
                    <div className={classes.card__icon}>
                      <option.icon />
                    </div>
                  </div>
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
