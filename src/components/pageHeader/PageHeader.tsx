import React from "react";
import classes from "./pageHeader.module.css";

interface PageHeadingProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeadingProps> = ({ title, description }) => {
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default PageHeader;
