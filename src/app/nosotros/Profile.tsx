import React from "react";
import classes from "./organization.module.css";
import Image from "next/image";

interface ProfileProps {
  name: string;
  userId: string;
  position: string;
  career: string;
  image: string;
}
const Profile: React.FC<ProfileProps> = ({
  name,
  userId,
  position,
  career,
  image,
}) => {
  return (
    <div className={classes.profile}>
      <div className={classes.profile__image}>
        <Image src={image} alt="profile" fill />
      </div>
      <div className={classes.profile__info}>
        <h3>{name}</h3>
        <p>{position}</p>
        <p>{career}</p>
      </div>
    </div>
  );
};

export default Profile;
