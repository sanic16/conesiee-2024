import React from "react";
import { FaChalkboardTeacher, FaCogs, FaUserCog } from "react-icons/fa";
import { FaBuilding, FaBus, FaCar, FaUsers, FaWrench } from "react-icons/fa6";
import classes from "./scope.module.css";

const Scope = () => {
  return (
    <div className={`container ${classes.details__icons}`}>
      <div className={classes.details__icon}>
        <FaUsers />
        <div className={classes["details__icons-amount"]}>+ 150</div>
        <h4 className={classes["details__icons-title"]}>Participantes</h4>
      </div>

      <div className={classes.details__icon}>
        <FaBus />
        <div className={classes["details__icons-amount"]}>+ 6</div>
        <h4 className={classes["details__icons-title"]}>Visitas Técnicas</h4>
      </div>

      <div className={classes.details__icon}>
        <FaChalkboardTeacher />
        <div className={classes["details__icons-amount"]}>+ 15 </div>
        <h4 className={classes["details__icons-title"]}>Conferencias</h4>
      </div>

      <div className={classes.details__icon}>
        <FaCogs />
        <div className={classes["details__icons-amount"]}>+9</div>
        <h4 className={classes["details__icons-title"]}>Talleres</h4>
      </div>
    </div>
  );
};

export default Scope;
