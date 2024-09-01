"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <button onClick={handleBack} className="btn primary">
      regresar
    </button>
  );
};

export default BackButton;
