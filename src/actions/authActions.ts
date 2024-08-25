"use server";

import * as auth from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

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
  return auth.signOut();
}
