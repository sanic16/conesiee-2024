import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import classes from "./navbar.module.css";
import logo from "@/../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import InfoText from "./InfoText";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className={`container ${classes.container}`}>
      {/* Logo */}
      <div className={classes.logo}>
        <Link href="/">
          <Image src={logo} alt="logo" width={338} height={396.67} />
        </Link>
      </div>

      {/* Search */}
      <div className={classes.search}>
        <form className={classes.search__form}>
          <input
            type="text"
            className={classes.search__input}
            placeholder="Buscar..."
          />
          <button className={classes.search__button}>
            <FaSearch />
          </button>
        </form>
      </div>

      {/* Social Networks */}
      <ul className={classes.social}>
        <li className={classes.social__item}>
          <a
            href="https://www.facebook.com/CONESIEEGT/"
            className={classes.social__link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaFacebook />
          </a>
        </li>
        <li className={classes.social__item}>
          <a
            href="https://www.instagram.com/conesiee_usac/"
            className={classes.social__link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaInstagram />
          </a>
        </li>
        <li className={classes.social__item}>
          <a
            href="https://whatsapp.com/channel/0029Vak7Zt6JkK7Gv9nQh92R"
            className={classes.social__link}
          >
            <FaWhatsapp />
          </a>
        </li>
      </ul>

      {/* Auth */}
      <nav className={classes.auth__wrapper}>
        <div className={classes.auth}>
          <Link href="/login" className={classes.auth__link}>
            Iniciar Sesión
          </Link>
        </div>
      </nav>

      {/* Info */}
      <InfoText className={classes.info} />

      {/* Menu */}
      <nav className={classes.menu}>
        <ul className={classes.menu__list}>
          <li className={classes.menu__item}>
            <NavLink
              href="/"
              className={classes.menu__link}
              activeClassName={classes.active}
            >
              Inicio
            </NavLink>
          </li>
          <li className={classes.menu__item}>
            <NavLink
              href="/nosotros"
              className={classes.menu__link}
              activeClassName={classes.active}
            >
              Nosotros
            </NavLink>
          </li>
          <li className={classes.menu__item}>
            <NavLink
              href="/galeria"
              className={classes.menu__link}
              activeClassName={classes.active}
            >
              Galería
            </NavLink>
          </li>
          <li className={classes.menu__item}>
            <NavLink
              href="/visitas"
              className={classes.menu__link}
              activeClassName={classes.active}
            >
              Visitas Técnicas
            </NavLink>
          </li>
          <li className={classes.menu__item}>
            <NavLink
              href="/inscripciones"
              className={classes.menu__link}
              activeClassName={classes.active}
            >
              Inscripciones
            </NavLink>
          </li>
          <li className={classes.menu__item}>
            <NavLink
              href="/contacto"
              className={classes.menu__link}
              activeClassName={classes.active}
            >
              Contacto
            </NavLink>
          </li>
          <li className={classes.menu__item}>
            <NavLink
              href="/congreso"
              className={classes.menu__link}
              activeClassName={classes.active}
            >
              Congreso
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
