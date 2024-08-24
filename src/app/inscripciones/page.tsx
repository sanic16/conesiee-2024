import BannerCongress from "@/components/bannerCongress/BannerCongress";
import StudentPaymentForm from "@/components/forms/conesieeRegistration/PaymentStudentForm";
import Info from "./Info";

const PaymentPage = () => {
  return (
    <>
      <BannerCongress
        title="Inscripción"
        description="Asegura tu lugar en el congreso."
        image="conesiee/congress/ec5l16pt1fj9ac1lmntl"
      />
      <div className="container">
        <Info />
      </div>
    </>
  );
};

export default PaymentPage;
