import Image from "next/image";
import { User } from "@prisma/client";
import classes from "./perfil.module.css";

const Perfil = ({ user }: { user: User }) => {
  return (
    <div className={classes.profile}>
      <div className={classes.profile__image}>
        <Image src={user.image || ""} alt="Foto de perfil" fill />
      </div>
      <div className={classes.profile__info}>
        <h1 className={classes.profile__user}>
          Usuario: <span>{user.name}</span>{" "}
        </h1>
        <h2 className={classes.profile__name}>
          Nombre: <span>{user.fullName}</span>
        </h2>
        <h2 className={classes.profile__email}>
          Correo Electrónico: {user.email}
        </h2>
        <p>
          Registrado el:{" "}
          {user.createdAt.toLocaleString("es-GT", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default Perfil;
