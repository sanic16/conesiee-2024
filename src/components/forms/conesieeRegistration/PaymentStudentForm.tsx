"use client";
import { FaEnvelope, FaIdCard, FaUser } from "react-icons/fa6";
import FormInput from "../formInput/FormInput";
import { FaMobileAlt, FaTicketAlt } from "react-icons/fa";
import classes from "./paymentForm.module.css";
import { useFormState } from "react-dom";
import { createSingleStudentPaymentAction } from "@/actions/paymentActions";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const careers = [
  "Ingeniería Eléctrica",
  "Ingeniería Mecánica Eléctrica",
  "Igeniería Electrónica",
  "Otra",
];

const registrationPackage = [
  "Individual(Sin cena de gala) - Q. 400.00",
  "Individual(Con cena de gala) - Q. 500.00",
  "Day Pass - Q. 200.00",
];

const StudentPaymentForm = () => {
  const [captcha, setCaptcha] = useState<string | null>(null);

  const [formState, action] = useFormState(
    createSingleStudentPaymentAction.bind(null, { captcha }),
    {
      errors: {},
    }
  );
  console.log(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);
  return (
    <div className={`container ${classes.container}`}>
      <h1 className={classes.form__heading}>
        Congresos <span>CONESIEE 2024</span> <br />
        Estudiantes Individuales
      </h1>
      <form action={action} className={classes.form}>
        <FormInput
          type="email"
          label="Correo Electrónico"
          placeholder="2320556340103@ingenieria.usac.edu.gt"
          id="email"
          name="email"
          icon={<FaEnvelope />}
          error={
            formState.errors.email &&
            formState.errors.email.join(", ").toString()
          }
        />
        <FormInput
          type="text"
          label="Nombre Completo"
          placeholder="Nombre Completo"
          id="name"
          name="name"
          icon={<FaUser />}
          error={
            formState.errors.name && formState.errors.name.join(", ").toString()
          }
        />
        <FormInput
          type="text"
          label="Número de Carné"
          placeholder="201900000"
          id="studentId"
          name="studentId"
          icon={<FaIdCard />}
          error={
            formState.errors.studentId &&
            formState.errors.studentId.join(", ").toString()
          }
        />
        <FormInput
          type="text"
          label="Número de DPI"
          placeholder="2320556340103"
          id="dpi"
          name="dpi"
          icon={<FaIdCard />}
          error={
            formState.errors.dpi && formState.errors.dpi.join(", ").toString()
          }
        />
        <FormInput
          type="text"
          label="Número de Teléfono"
          placeholder="12345678"
          id="phone"
          name="phone"
          icon={<FaMobileAlt />}
          error={
            formState.errors.phone &&
            formState.errors.phone.join(", ").toString()
          }
        />
        <FormInput
          type="radio"
          label="Carrera que estudias"
          id="career"
          name="career"
          options={careers}
          error={
            formState.errors.career &&
            formState.errors.career.join(", ").toString()
          }
        />
        <FormInput
          type="radio"
          label="Paquete de Inscripción"
          id="registrationPackage"
          name="registrationPackage"
          options={registrationPackage}
          error={
            formState.errors.registrationPackage &&
            formState.errors.registrationPackage.join(", ").toString()
          }
        />
        <FormInput
          type="text"
          label="Número de Boleta"
          placeholder="12345678"
          id="ticketNumber"
          name="ticketNumber"
          icon={<FaTicketAlt />}
          error={
            formState.errors.ticketNumber &&
            formState.errors.ticketNumber.join(", ").toString()
          }
        />

        <FormInput
          type="file"
          label="Comprobante de Pago"
          id="paymentProof"
          name="paymentProof"
          error={
            formState.errors.paymentProofImage &&
            formState.errors.paymentProofImage.join(", ").toString()
          }
        />

        <div>
          <p className={classes.error__message}>
            {formState.errors._form &&
              formState.errors._form.join(", ").toString()}
          </p>
        </div>

        <div className={classes.contact__actions}>
          <button type="submit">Enviar</button>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            onChange={(value) => setCaptcha(value)}
          />
        </div>
      </form>
    </div>
  );
};

export default StudentPaymentForm;
