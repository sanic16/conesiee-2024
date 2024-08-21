import React from "react";
import { IconType } from "react-icons";
import classes from "./homeSubheading.module.css";

interface HomeSubHeadingProps {
  title: string;
  position: "left" | "center" | "right";
  icon: IconType;
}

const HomeSubHeading: React.FC<HomeSubHeadingProps> = ({
  title,
  position,
  icon,
}) => {
  return (
    <div>
      <h2
        className={`${classes.heading} ${
          position === "center"
            ? classes.center
            : position === "right"
            ? classes.right
            : classes.left
        }`}
      >
        <span>{React.createElement(icon)}</span> {title}
      </h2>
    </div>
  );
};

export default HomeSubHeading;
