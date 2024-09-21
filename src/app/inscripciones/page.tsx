import BannerCongress from "@/components/bannerCongress/BannerCongress";
import Info from "./Info";
import { Metadata } from "next";
import HomeHeading from "@/components/homeHeading/HomeHeading";
import PricingInfo from "./PricingInfo";
import BackButton from "@/components/ui/backButton/BackButton";
import classes from './page.module.css'

export const metadata: Metadata = {
  title: "CONESIEE | Inscripción",
  description: "Asegura tu lugar en el congreso.",
};

const PaymentPage = () => {
  return (
    <>

     

      <BannerCongress
        title="Inscripción"
        description="Asegura tu lugar en el congreso."
        image="conesiee/congress/ec5l16pt1fj9ac1lmntl"
      />

      <section className="container">
        <BackButton />
         <div className={classes.info__box} id="warning">
          Actualmente se encuentra lleno el cupo de inscripciones. Estar atento a si se habilitan más cupos.
        </div>
        <Info />
        <HomeHeading title="Precios de inscripción" description="" />
        <PricingInfo />
      </section>
    </>
  );
};

export default PaymentPage;
