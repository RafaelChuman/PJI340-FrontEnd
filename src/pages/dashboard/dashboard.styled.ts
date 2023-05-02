import { theme } from "@/App.styled";
import styled, { StyledComponent, ThemedStyledFunction } from "styled-components";

interface Dictionary {
  [Key: string]: string;
}

interface ChartsProps {
  color: { [key: string]: string };
}

export function Container({ color }: ChartsProps) {
  return styled.div`
    display: flex;
    width: 100%;
    flex-direction:column;

    .ChartDataContainer {
      display: flex;
      width:100%;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      text-align:center;
      margin: 20px;
      padding: 20px;
      border-radius: 10px;
      border: 2px solid ${color[800]};
      
    }
  `;
}
