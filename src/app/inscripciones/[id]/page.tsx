import IndividualPaymentForm from "@/components/forms/conesieeRegistration/IndividualPaymentForm";
import PageHeading from "@/components/pageHeading/PageHeading";
import { cards } from "@/data/payment";
import { notFound } from "next/navigation";
import React from "react";

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

  return (
    <div className="container">
      <PageHeading
        title={`Inscripción ${params.id.toLocaleUpperCase()}`}
        description={`El costo de la inscripción es de ${packageInfo.price} Quetzales`}
      />

      <IndividualPaymentForm registrationPackage={params.id} />
    </div>
  );
}
