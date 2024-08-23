import { cloudinaryUrl } from "@/utils/constants";
import React from "react";
import classes from "./bannerCongress.module.css";
import PageHeader from "../pageHeader/PageHeader";

interface BannerCongressProps {
  title: string;
  description: string;
  image: string;
}

const BannerCongress: React.FC<BannerCongressProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div
      className={`container ${classes.banner}`}
      style={{
        background: `#000 url(${cloudinaryUrl}/${image}) center center/cover no-repeat `,
      }}
    >
      <div className={classes.banner__background}>
        <PageHeader title={title} description={description} />
      </div>
    </div>
  );
};

export default BannerCongress;
