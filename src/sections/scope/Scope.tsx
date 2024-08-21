import React from "react";
import { FaChalkboardTeacher, FaUserCog } from "react-icons/fa";
import { FaBuilding, FaBus, FaCar, FaUsers } from "react-icons/fa6";
import classes from "./scope.module.css";

const Scope = () => {
  return (
    <section className={`container ${classes.details__icons}`}>
      <div className={classes.details__icon}>
        <FaUsers />
        <div className={classes["details__icons-amount"]}>+ 150</div>
        <h4 className={classes["details__icons-title"]}>Participantes</h4>
      </div>

      <div className={classes.details__icon}>
        <FaBus />
        <div className={classes["details__icons-amount"]}>+ 15</div>
        <h4 className={classes["details__icons-title"]}>Visitas Técnicas</h4>
      </div>

      <div className={classes.details__icon}>
        <FaChalkboardTeacher />
        <div className={classes["details__icons-amount"]}>+ 20 </div>
        <h4 className={classes["details__icons-title"]}>Conferencistas</h4>
      </div>

      <div className={classes.details__icon}>
        <FaBuilding />
        <div className={classes["details__icons-amount"]}>+6</div>
        <h4 className={classes["details__icons-title"]}>Patrocinadores</h4>
      </div>
    </section>
  );
};

export default Scope;
