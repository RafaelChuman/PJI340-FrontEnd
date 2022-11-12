import React from "react";
import { ElementType } from "react";
import { IconType } from "react-icons/lib";

interface NavLinkProps {
  icon: IconType;
  navComponent: string;
  href: string;
}

export function NavLink({ icon, navComponent, href }: NavLinkProps) {
  return (
    <div className="NavLink">
      <a href={href}>
        <>
          {React.createElement(icon) }&nbsp; {navComponent}
        </>
      </a>
    </div>
  );
}
