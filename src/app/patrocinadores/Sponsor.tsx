import Image from "next/image";
import classes from "./page.module.css";

interface SponsorProps {
  name: string;
  logo: {
    src: string;
    width: number;
    height: number;
  };
  description: string;
  website: string;
  category: "diamond" | "gold" | "silver" | "bronze";
  contribution:
    | "Patrocinador Diamante"
    | "Patrocinador Oro"
    | "Patrocinador Plata"
    | "Patrocinador Bronce";
}
const Sponsor: React.FC<SponsorProps> = ({
  name,
  logo,
  description,
  website,
  category,
  contribution,
}) => {
  let categoryClass = "";
  switch (category) {
    case "diamond":
      categoryClass = classes.diamond;
      break;
    case "gold":
      categoryClass = classes.gold;
      break;
    case "silver":
      categoryClass = classes.silver;
      break;
    case "bronze":
      categoryClass = classes.bronze;
      break;
    default:
      categoryClass = "";
      break;
  }
  return (
    <div className={`${classes.sponsor} ${categoryClass}`}>
      <div className={classes.info}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={classes.details}>
          <p>{contribution}</p>

          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            Visitar sitio web
          </a>
        </div>
      </div>
      <div className={classes.logo}>
        <Image src={logo} alt="" />
      </div>
    </div>
  );
};

export default Sponsor;
