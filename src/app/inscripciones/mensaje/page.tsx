import classes from "./page.module.css";

export default function RegistrationMessagePage() {
  return (
    <section className={`container ${classes.container}`}>
      <h1 className={classes.title}>¡Gracias por inscribirte!</h1>
      <p className={classes.message}>Gracias por tu interés en el congreso.</p>
    </section>
  );
}
