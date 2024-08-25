"use client";
import { FaEnvelope, FaIdCard, FaUser } from "react-icons/fa6";
import FormInput from "../formInput/FormInput";
import { FaMobileAlt, FaTicketAlt } from "react-icons/fa";
import classes from "./paymentForm.module.css";
import { useFormState } from "react-dom";
import { createComboPaymentAction, createIndividualPaymentAction } from "@/actions/paymentActions";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const careers = [
  "Ingeniería Eléctrica",
  "Ingeniería Mecánica Eléctrica",
  "Igeniería Electrónica",
  "Otra",
];

interface IndividualPaymentFormProps {
  registrationPackage: string;
}

const ComboPaymentForm: React.FC<IndividualPaymentFormProps> = ({
  registrationPackage,
}) => {
  const [captcha, setCaptcha] = useState<string | null>(null);

  const [formState, action] = useFormState(
    createComboPaymentAction.bind(
      null,
      { captcha },
      { registrationPackage }
    ),
    {
      errors: {},
    }
  );
  return (
    <div className={`container ${classes.container}`}>
      <form action={action} className={classes.form}>
        <FormInput
          type="email"
          label="Correo Electrónico Persona 1"
          placeholder="2320556340103@ingenieria.usac.edu.gt"
          id="emailPerson1"
          name="emailPerson1"
          icon={<FaEnvelope />}
          error={
            formState.errors.emailPerson1 &&
            formState.errors.emailPerson1.join(", ").toString()
          }
        />
        <FormInput
          type="text"
          label="Nombre Completo Persona 1"
          placeholder="Nombre Completo Persona 1"
          id="namePerson1"
          name="namePerson1"
          icon={<FaUser />}
          error={
            formState.errors.namePerson1 && formState.errors.namePerson1.join(", ").toString()
          }
        />
        <FormInput
          type="text"
          label="Número de Carné de Estudiante Persona 1"
          placeholder="201900000"
          id="studentIdPerson1"
          name="studentIdPerson1"
          icon={<FaIdCard />}
          error={
            formState.errors.studentIdPerson1 &&
            formState.errors.studentIdPerson1.join(", ").toString()
          }
        />
        <FormInput
          type="text"
          label="Número de DPI Persona 1"
          placeholder="2320556340103"
          id="dpiPerson1"
          name="dpiPerson1"
          icon={<FaIdCard />}
          error={
            formState.errors.dpiPerson1 && formState.errors.dpiPerson1.join(", ").toString()
          }
        />
        <FormInput
          type="text"
          label="Número de Teléfono Persona 1"
          placeholder="12345678"
          id="phonePerson1"
          name="phonePerson1"
          icon={<FaMobileAlt />}
          error={
            formState.errors.phonePerson1 &&
            formState.errors.phonePerson1.join(", ").toString()
          }
        />
        <FormInput
          type="radio"
          label="Carrera que estudias o estudiaste"
          id="careerPerson1"
          name="careerPerson1"
          options={careers}
          error={
            formState.errors.careerPerson1 &&
            formState.errors.careerPerson1.join(", ").toString()
          }
        />

        <FormInput
          type="text"
          label="Número de Boleta de Pago Persona 1"
          placeholder="12345678"
          id="ticketNumberPerson1"
          name="ticketNumberPerson1"
          icon={<FaTicketAlt />}
          error={
            formState.errors.ticketNumberPerson1 &&
            formState.errors.ticketNumberPerson1.join(", ").toString()
          }
        />

        <FormInput
          type="file"
          label="Comprobante de Pago Persona 1"
          id="paymentProofPerson1"
          name="paymentProofPerson1"
          error={
            formState.errors.paymentProofImagePerson1 &&
            formState.errors.paymentProofImagePerson1.join(", ").toString()
          }
        />

        

        <FormInput
          type="email"
          label="Correo Electrónico Persona 2"
          placeholder="Correo Electrónico Persona 2"
          id="emailPerson2"
          name="emailPerson2"
          icon={<FaEnvelope />}
          error={
            formState.errors.emailPerson2 &&
            formState.errors.emailPerson2.join(", ").toString()
          }
        />
        <FormInput
          type="text"
          label="Nombre Completo Persona 2"
          placeholder="Nombre Completo Persona 2"
          id="namePerson2"
          name="namePerson2"
          icon={<FaUser />}
          error={
            formState.errors.namePerson2 && formState.errors.namePerson2.join(", ").toString()
          }
        />
        <FormInput
          type="text"
          label="Número de Carné de Estudiante Persona 2"
          placeholder="201900000"
          id="studentIdPerson2"
          name="studentIdPerson2"
          icon={<FaIdCard />}
          error={
            formState.errors.studentIdPerson2 &&
            formState.errors.studentIdPerson2.join(", ").toString()
          }
        />
        <FormInput
          type="text"
          label="Número de DPI Persona 2"
          placeholder="2320556340103"
          id="dpiPerson2"
          name="dpiPerson2"
          icon={<FaIdCard />}
          error={
            formState.errors.dpiPerson2 && formState.errors.dpiPerson2.join(", ").toString()
          }
        />
        <FormInput
          type="text"
          label="Número de Teléfono Persona 2"
          placeholder="12345678"
          id="phonePerson2"
          name="phonePerson2"
          icon={<FaMobileAlt />}
          error={
            formState.errors.phonePerson2 &&
            formState.errors.phonePerson2.join(", ").toString()
          }
        />
        <FormInput
          type="radio"
          label="Carrera que estudias o estudiaste"
          id="careerPerson2"
          name="careerPerson2"
          options={careers}
          error={
            formState.errors.careerPerson2 &&
            formState.errors.careerPerson2.join(", ").toString()
          }
        />

        <FormInput
          type="text"
          label="Número de Boleta de Pago Persona 2"
          placeholder="12345678"
          id="ticketNumberPerson2"
          name="ticketNumberPerson2"
          icon={<FaTicketAlt />}
          error={
            formState.errors.ticketNumberPerson2 &&
            formState.errors.ticketNumberPerson2.join(", ").toString()
          }
        />


        <FormInput
          type="file"
          label="Comprobante de Pago Persona 2"
          id="paymentProofPerson2"
          name="paymentProofPerson2"
          error={
            formState.errors.paymentProofImagePerson2 &&
            formState.errors.paymentProofImagePerson2.join(", ").toString()
          }
        />

        
       
        <FormInput
          type="email"
          label="Correo Electrónico Persona 3"
          placeholder="Correo Electrónico Persona 3"
          id="emailPerson3"
          name="emailPerson3"
          icon={<FaEnvelope />}
          error={
            formState.errors.emailPerson3 &&
            formState.errors.emailPerson3.join(", ").toString()
          }
        />
        <FormInput
          type="text"
          label="Nombre Completo Persona 3"
          placeholder="Nombre Completo Persona 3"
          id="namePerson3"
          name="namePerson3"
          icon={<FaUser />}
          error={
            formState.errors.namePerson3 && formState.errors.namePerson3.join(", ").toString()
          }
        />
        <FormInput
          type="text"
          label="Número de Carné de Estudiante Persona 3"
          placeholder="201900000"
          id="studentIdPerson3"
          name="studentIdPerson3"
          icon={<FaIdCard />}
          error={
            formState.errors.studentIdPerson3 &&
            formState.errors.studentIdPerson3.join(", ").toString()
          }
        />
        <FormInput
          type="text"
          label="Número de DPI Persona 3"
          placeholder="2320556340103"
          id="dpiPerson3"
          name="dpiPerson3"
          icon={<FaIdCard />}
          error={
            formState.errors.dpiPerson3 && formState.errors.dpiPerson3.join(", ").toString()
          }
        />
        <FormInput
          type="text"
          label="Número de Teléfono Persona 3"
          placeholder="12345678"
          id="phonePerson3"
          name="phonePerson3"
          icon={<FaMobileAlt />}
          error={
            formState.errors.phonePerson3 &&
            formState.errors.phonePerson3.join(", ").toString()
          }
        />
        <FormInput
          type="radio"
          label="Carrera que estudias o estudiaste"
          id="careerPerson3"
          name="careerPerson3"
          options={careers}
          error={
            formState.errors.careerPerson3 &&
            formState.errors.careerPerson3.join(", ").toString()
          }
        />
        <FormInput
          type="text"
          label="Número de Boleta de Pago Persona 3"
          placeholder="12345678"
          id="ticketNumberPerson3"
          name="ticketNumberPerson3"
          icon={<FaTicketAlt />}
          error={
            formState.errors.ticketNumberPerson3 &&
            formState.errors.ticketNumberPerson3.join(", ").toString()
          }
        />
        <FormInput
          type="file"
          label="Comprobante de Pago Persona 3"
          id="paymentProofPerson3"
          name="paymentProofPerson3"
          error={
            formState.errors.paymentProofImagePerson3 &&
            formState.errors.paymentProofImagePerson3.join(", ").toString()
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

export default ComboPaymentForm;
