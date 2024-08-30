"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function search(search: string) {
  if (typeof search !== "string" || !search) {
    redirect("/");
  }

  revalidatePath("/search");
  if (search) {
    redirect(`/search?search=${search}`);
  }
}
