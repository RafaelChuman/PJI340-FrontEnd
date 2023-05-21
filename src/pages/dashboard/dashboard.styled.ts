import { theme } from "@/App.styled";
import styled, {
  StyledComponent,
  ThemedStyledFunction,
} from "styled-components";

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
    flex-direction: column;

    .ChartDataContainer {
      display: flex;
      position: relative;
      width: fit-content;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 20px;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
      background: ${color[50]};

      .filterButton {
        position: absolute;
        top: 15px;
        right: 15px;
        display: inline-block;
      }
    }
  `;
}

export function ModalContainer() {
  return styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    .divFields {
      display: flex;
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 20px;
    }

    .comboBoxMulti{
      display: flex;
      width: 100%;
      margin: 0px;
      padding: 0px;
      position: relative;
      box-sizing: border-box;
    }
  `;
}
// border: 2px solid ${color[800]};
