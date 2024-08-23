import classes from "./page.module.css";
import Image from "next/image";

const page = () => {
  const imageLink =
    "https://conesiee-static.codielectro.com/visitas/horus/WhatsApp%20Image%202024-08-20%20at%207.35.33%20AM.jpeg";
  return (
    <div className="container">
      <div className={classes.image}>
        <Image src={imageLink} alt="Horus" fill />
      </div>
    </div>
  );
};

export default page;
