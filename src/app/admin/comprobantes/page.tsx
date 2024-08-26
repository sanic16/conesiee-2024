import Payments from "./Payments";
import { Suspense } from "react";
import classes from "./page.module.css";
import PageHeading from "@/components/pageHeading/PageHeading";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ComprobantesPage() {
  const payments = await prisma.studentPayment.findMany({});
  return (
    <div className={`container ${classes.container}`}>
      <PageHeading title="Comprobantes" description="" />
      <section>
        <Payments payments={payments} />
      </section>
    </div>
  );
}
