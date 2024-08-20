"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className: string;
  activeClassName: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className,
  activeClassName,
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${className} ${pathname === href && activeClassName}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
