import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Correo inválido",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres",
  }),
});
