"use server";

import * as auth from "@/auth";

export async function signInAction() {
  return auth.signIn();
  //   try {
  //     await auth.signIn();
  //   } catch (error: unknown) {
  //     if (error instanceof AuthError) {
  //       switch (error.type) {
  //         case "CredentialsSignin":
  //           return {
  //             error: "Credenciales Inválidas!!",
  //           };
  //         default:
  //           return {
  //             error: "Un error ha ocurrido!",
  //           };
  //       }
  //     }
  //     throw error;
  //   }
}

export async function signOutAction() {
  return auth.signOut({
    redirect: true,
    redirectTo: "/",
  });
}
