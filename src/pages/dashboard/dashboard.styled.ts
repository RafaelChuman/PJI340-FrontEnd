import { theme } from "@/App.styled";
import styled from "styled-components";

export const Container = styled.div`
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
    border: 2px solid ${theme.colors.pink[800]};
    
  }
`;
