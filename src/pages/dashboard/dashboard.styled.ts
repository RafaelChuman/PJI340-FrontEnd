import { theme } from "@/App.styled";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: "100%";
  margin-top: 6px;
  max-width: 1480px;
  margin-left: auto;
  padding: 6px;

  .GridContainer {
    width: 100%;
    margin-top: 6px;
    direction: row;
    margin-left: auto;
  }

  .GridContent {
    display: flex;
    align-items: center;
  }

  .ChartDataContainer {
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    border: 2px solid ${theme.colors.pink[800]};
    
  }
`;
