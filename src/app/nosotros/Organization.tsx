import HomeHeading from "@/components/homeHeading/HomeHeading";
import { members } from "@/data/organization-members";
import React from "react";
import Profile from "./Profile";
import classes from "./organization.module.css";

const Organization = () => {
  return (
    <div className={classes.organization} id="organization">
      <HomeHeading
        title="Organizadores"
        description="Conoce a nuestro equipo de trabajo"
      />

      <div className={classes.members}>
        {members.map((member) => (
          <Profile key={member.userId} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Organization;
