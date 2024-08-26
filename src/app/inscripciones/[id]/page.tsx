import IndividualPaymentForm from "@/components/forms/conesieeRegistration/IndividualPaymentForm";
import ComboPaymentForm from "@/components/forms/conesieeRegistration/ComboPaymentForm";
import PageHeading from "@/components/pageHeading/PageHeading";
import { cards } from "@/data/payment";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import accountImg from "@/../public/images/cuenta.jpeg";
import classes from "./page.module.css";

export default function PaymentDetailsPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const ids = cards.map((card) => card.link.split("/").pop());
  if (!ids.includes(params.id)) return notFound();
  const packageInfo = cards.find(
    (card) => card.link.split("/")[2] === params.id
  );
  if (!packageInfo) return notFound();
  const comboFormData = ["usac-combo", "externos-combo"];

  let form;

  console.log(params.id);

  if (comboFormData.includes(params.id)) {
    form = <ComboPaymentForm registrationPackage={params.id} />;
  } else {
    form = <IndividualPaymentForm registrationPackage={params.id} />;
  }

  return (
    <div className="container">
      <PageHeading
        title={`Inscripción ${params.id.toLocaleUpperCase()}`}
        description={`El costo de la inscripción es de ${packageInfo.price} Quetzales`}
      />
      <div className={classes.payment}>
        <p>Puedes realizar el pago de la inscripción a la siguiente cuenta:</p>
        <div className={classes.payment__image}>
          <Image
            src={accountImg}
            alt="Cuenta"
            width={accountImg.width / 2}
            height={accountImg.height / 2}
          />
        </div>
      </div>

      {form}
    </div>
  );
}
