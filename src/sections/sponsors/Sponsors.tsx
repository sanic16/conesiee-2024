import HomeHeading from "@/components/homeHeading/HomeHeading";
import classes from "./sponsors.module.css";
import sterenLogo from "@/../public/images/sponsor_logos/steren_logo.png";
import energiaActivaLogo from "@/../public/images/sponsor_logos/energia_activa_logo.png";
import esinsaLogo from "@/../public/images/sponsor_logos/esinsa.png";
import eegsaLogo from "@/../public/images/sponsor_logos/eegsa_logo.jpg";
import tecnoLogo from "@/../public/images/sponsor_logos/tecno_logo.png";
import proelcaLogo from "@/../public/images/sponsor_logos/proelca_logo.png";
import Image from "next/image";
import TecnoLogo from "./TecnoLogo";

const Sponsors = () => {
  return (
    <div className={`container ${classes.container}`} id="patrocinadores">
      <div className={classes.container__bg}>
        <HomeHeading
          title="Nuestros Patrocinadores"
          description="Estos son los patrocinadores del CONESIEE 2024 que hacen posible la realización de este evento."
        />
        <div className={classes.logos}>
          <div className={classes.diamond__sponsor}>
            <Image
              src={sterenLogo}
              alt="Steren"
              width={sterenLogo.width / 5}
              height={sterenLogo.height / 5}
            />
            <Image src={energiaActivaLogo} alt="Energía Activa" />
          </div>
          <div className={classes.gold__sponsor}>
            <Image
              src={eegsaLogo}
              alt="EEGSA"
              width={eegsaLogo.width / 3}
              height={eegsaLogo.height / 3}
            />
          </div>
          <div className={classes.silver__sponsor}>
            <Image src={esinsaLogo} alt="ESINSA" />
            <TecnoLogo />
          </div>
          <div className={classes.bronze__sponsor}>
            <Image src={proelcaLogo} alt="Proelca" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
