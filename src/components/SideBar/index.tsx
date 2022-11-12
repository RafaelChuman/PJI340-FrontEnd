import { Container } from "./SideBar.styled";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import {
  RiHome2Line,
  RiDashboardLine,
  RiGitMergeLine,
  RiHealthBookLine,
  RiInputMethodLine,
} from "react-icons/ri";

export function SideBar() {
  return (
    <Container>
      <NavSection title="Manutenção">
        <NavLink href="/dashboard" icon={RiDashboardLine} navComponent="Dashboard" />
        <NavLink
          href="/ers"
          icon={RiHome2Line}
          navComponent="ER's"
        />

        <NavLink href="/zones" icon={RiInputMethodLine} navComponent="Zonas" />
        <NavLink
          href="/activities"
          icon={RiGitMergeLine}
          navComponent="Atividades"
        />
        <NavLink
          href="/collaborators"
          icon={RiHealthBookLine}
          navComponent="Colaboradores"
        />
                
      </NavSection>
    </Container>
  );
}
