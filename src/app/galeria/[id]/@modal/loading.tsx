import classes from "./loading.module.css";
import { FadeLoader } from "react-spinners";

const loading = () => {
  return (
    <div className={classes.loading}>
      <FadeLoader color="hsl(45, 80%, 50%)" loading={true} />
    </div>
  );
};

export default loading;
