import type { FC, PropsWithChildren } from "react";
import classes from "./adWrapper.module.css";

const AdWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={`container ${classes.adWrapper}`}>{children}</div>;
};

export default AdWrapper;
