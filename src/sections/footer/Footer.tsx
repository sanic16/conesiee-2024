import Link from "next/link";
import classes from "./footer.module.css";
import Image from "next/image";
import logo from "@/../public/images/logo.png";

const Footer = () => {
  return (
    <footer className={`container ${classes.container}`}>
      <div className={classes.footer__box}>
        <div className={classes.footer__left}>
          <div className={classes.logo}>
            <Image
              src={logo}
              width={logo.width / 10}
              height={logo.height / 10}
              alt="Logo CONESIEE 2024"
            />
          </div>
          <ul className={classes.footer__menu}>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link href="/patrocinadores">Patrocinadores</Link>
            </li>
          </ul>
        </div>
        <div className={classes.footer__right}>
          Desarrollado por{" "}
          <a
            href="https://www.juliosanic.site"
            target="_blank"
            rel="noreferrer noopener"
          >
            Julio Sanic
          </a>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
