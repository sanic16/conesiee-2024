import BannerCongress from "@/components/bannerCongress/BannerCongress";
import Info from "./Info";
import { Metadata } from "next";

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
        <Info />
      </section>
    </>
  );
};

export default PaymentPage;
