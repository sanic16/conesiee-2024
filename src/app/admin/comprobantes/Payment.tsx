import { StudentPayment } from "@prisma/client";
import classes from "./payments.module.css";

const Payment = ({ payment }: { payment: StudentPayment }) => {
  
  return (
    <tr className={classes.tableRow}>
      <td className={classes.package__id}>{payment.registrationPackage}</td>
      <td
        className={`${classes.ticket__number} ${
          payment.registrationPackage === "usac-completo" && classes.gold
        }
    ${payment.registrationPackage === "usac-simple" && classes.silver}
    ${payment.registrationPackage === "usac-combo" && classes.bronze}`}
      >
        <a href={payment.imageUrl} target="_blank" rel="noopener noreferrer">
          {payment.ticketNumber}
        </a>
      </td>

      <td className={`${classes.student__info}`}>{payment.studentId}</td>
      <td className={classes.person__name}>{payment.name}</td>

      <td className={classes.person__phone}>{payment.phone}</td>
      <td className={classes.person__email}>{payment.email}</td>
    </tr>
  );
};

export default Payment;
