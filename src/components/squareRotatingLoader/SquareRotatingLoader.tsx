import classes from "./squareRotatingLoader.module.css";

const SquareRotatingLoader = () => {
  return (
    <div className={classes.loading__wrapper}>
      <div className={classes.loading}></div>
    </div>
  );
};

export default SquareRotatingLoader;
