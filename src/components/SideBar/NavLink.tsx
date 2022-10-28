import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps {
  icon: ElementType;
  navComponent: string;
  href: string;
}

export function NavLink({ icon, navComponent, href}: NavLinkProps) {
  return (
    <a href={href}>
      <>
        {icon}
        {navComponent}
      </>
    </a>
  );
}
