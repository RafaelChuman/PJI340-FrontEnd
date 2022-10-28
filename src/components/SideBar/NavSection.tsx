import { ReactNode } from "react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <div>
      <p className="NavSectionText">
        {title}
      </p>
      <div >
        {children}
      </div>
    </div>
  );
}
