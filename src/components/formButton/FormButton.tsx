"use client";

import { useFormStatus } from "react-dom";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn gold">
      {pending ? "Enviando..." : "Enviar"}
    </button>
  );
};

export default FormButton;
