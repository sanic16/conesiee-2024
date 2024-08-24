import PaymentStudentForm from "@/components/forms/conesieeRegistration/PaymentStudentForm";
import React from "react";

export default function PaymentDetailsPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div className="container">
      <PaymentStudentForm />
    </div>
  );
}
