import { redirect } from "next/navigation";

export default function page() {
  redirect("/admin/banner");
  return null;
}
