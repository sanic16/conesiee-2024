import classes from "./homeHeading.module.css";

interface HomeHeadingProps {
  title: string;
  description: string;
}
const HomeHeading: React.FC<HomeHeadingProps> = ({ title, description }) => {
  return (
    <div>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.divider} />
      <div className={classes.divider__big} />
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default HomeHeading;
