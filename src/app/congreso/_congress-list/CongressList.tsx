import Link from "next/link";
import React from "react";
import classes from "./congressList.module.css";

const CongressList = () => {
  return (
    <div className={classes.congressList}>
      <ul>
        <li>
          <Link href="/congreso/itinerario">Itinerario</Link>
        </li>
        <li>
          <Link href="/congreso/conferencias">Conferencias</Link>
        </li>
        <li>
          <Link href="/congreso/talleres">Talleres</Link>
        </li>
        <li>
          <Link href="/congreso/documentos">Documentos</Link>
        </li>
      </ul>
    </div>
  );
};

export default CongressList;
