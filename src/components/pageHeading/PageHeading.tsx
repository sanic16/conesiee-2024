import React from "react";
import classes from "./pageHeading.module.css";

interface PageHeadingProps {
  title: string;
  description: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ title, description }) => {
  return (
    <div>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.divider__small}></div>
      <div className={classes.divider}></div>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default PageHeading;
