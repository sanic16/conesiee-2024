import Link from "next/link";
import classes from "./searchCard.module.css";

interface SearchCardProps {
  title: string;
  description: string;
  link: string;
}

const SearchCard: React.FC<SearchCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <Link href={link}>
      <div className={classes.card}>
        <h3 className={classes.card__title}>{title}</h3>
        <div className={classes.divider} />
        <p className={classes.card__description}>{description}</p>
      </div>
    </Link>
  );
};

export default SearchCard;
