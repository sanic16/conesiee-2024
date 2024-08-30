"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function search(search: string) {
  if (typeof search !== "string" || !search) {
    redirect("/");
  }

  console.log("searching for", search);

  // revalidatePath("/search");
  if (search) {
    redirect(`/search?search=${search}`);
  }
}
