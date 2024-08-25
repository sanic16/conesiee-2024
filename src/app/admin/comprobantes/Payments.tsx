"use client";
import Payment from "./Payment";
import classes from "./payments.module.css";
import { StudentPayment } from "@prisma/client";

const Payments = ({ payments }: { payments: StudentPayment[] }) => {
  if (typeof window !== "undefined") {
    if (window.innerWidth < 769) {
      return <h2>Esta página no está disponible en dispositivos móviles</h2>;
    }
  }
  return (
    <div className={classes.responsiveTableContainer}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Package</th>
            <th>Boleta</th>
            <th>Carné</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <Payment key={payment.id} payment={payment} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
