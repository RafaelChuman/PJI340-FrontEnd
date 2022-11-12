import { RiReactjsLine } from "react-icons/ri";
import { Container } from "./Header.styled";

export function Logo() {
  return (
    <div className="LogoDiv">
      <p className="LogoContent">
        <RiReactjsLine/>PJI340<span>.</span>
      </p>
    </div>
  );
}
