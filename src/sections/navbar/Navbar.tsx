"use client";

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import classes from "./navbar.module.css";
import logo from "@/../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import InfoText from "./InfoText";
import NavLink from "./NavLink";
import { authNavbar, navbar } from "@/data/navbar";
import { useSession, signOut, signIn } from "next-auth/react";
import { signInAction, signOutAction } from "@/actions/authActions";
import SearchInput from "@/components/ui/searchInput/SearchInput";
import { Suspense } from "react";

const Navbar = () => {
  const session = useSession();
  return (
    <div className={`container ${classes.container}`}>
      {/* Logo */}
      <div className={classes.logo}>
        <Link href="/">
          <Image src={logo} alt="logo" width={338} height={396.67} />
        </Link>
      </div>

      {/* Search */}
      <Suspense>
        <SearchInput />
      </Suspense>

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
          {session && session.data ? (
            <form
              action={async () => {
                await signOutAction();
                await signOut({
                  redirect: true,
                  callbackUrl: "/",
                });
              }}
            >
              <button className={classes.auth__link}>Cerrar Sesión</button>
            </form>
          ) : (
            <form
              action={async () => {
                await signInAction();
              }}
            >
              <button className={classes.auth__link}>Iniciar Sesión</button>
            </form>
          )}
        </div>
      </nav>

      {/* Info */}
      <InfoText className={classes.info} />

      {/* Menu */}
      <nav className={classes.menu}>
        <ul className={classes.menu__list}>
          {session && session.data
            ? authNavbar.map((item) => (
                <li className={classes.menu__item} key={item.id}>
                  <NavLink
                    href={item.url}
                    className={classes.menu__link}
                    activeClassName={classes.active}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))
            : navbar.map((item) => (
                <li className={classes.menu__item} key={item.id}>
                  <NavLink
                    href={item.url}
                    className={classes.menu__link}
                    activeClassName={classes.active}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
