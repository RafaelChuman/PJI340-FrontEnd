import { theme } from "@/App.styled";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  margin-left: "auto";
  margin-top: 4px;
  padding: 6px;
  background-color: ${theme.colors.gray[100]};
  
  .LogoContent {
    font-size: ${theme.fontSizes["3rem"]};
    color: ${theme.colors.cyan[800]};
    font-weight: ${theme.fontWeights.extrabold};
    letter-spacing: ${theme.letterSpacings.tight};
  }

  .ProfileContent {
    display: flex;
    align-items: center;
    justify-content: right;
    margin: auto;
    width: 100%;

    div {
      display: flex;
      align-items: center;
      justify-content: right;
      flex-direction:column;
      padding: ${theme.space["0.5rem"]};
      

      .UserName {
        width: 100%;
        color: ${theme.colors.gray[800]};
        font-size: ${theme.fontSizes["1rem"]};
        font-weight: ${theme.fontWeights.semibold};
        letter-spacing: ${theme.letterSpacings.tight};
      }
      .Name {
        width: 100%;
        clear: left;
        color: ${theme.colors.cyan[800]};
        font-size: ${theme.fontSizes["1.5rem"]};
        font-weight: ${theme.fontWeights.bold};
        letter-spacing: ${theme.letterSpacings.tight};
      }

      img {
        width: 32;
        height: 32px;
        

        :hover {
          filter: grayscale(100%);
        }
        transition: filter 1000ms linear;

        border-radius: 4px;
      }
    }
  }
`;
