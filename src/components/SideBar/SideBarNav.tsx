import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiHealthBookLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav() {
  return (
    <div >
      <NavSection title="Geral">
        <NavLink href="/dashboard" icon={RiDashboardLine} navComponent="Dashboard" />
        <NavLink href="/users" icon={RiContactsLine} navComponent="Clientes" />
      </NavSection>
      <NavSection title="Administração">
        <div >
          <NavLink href="/categories" icon={RiInputMethodLine} navComponent="Categorias" />
          <NavLink href="/products" icon={RiGitMergeLine} navComponent="Produtos" />
          <NavLink href="/treatments" icon={RiHealthBookLine} navComponent="Tratamentos" />
        </div>
      </NavSection>
    </div>
  );
};
