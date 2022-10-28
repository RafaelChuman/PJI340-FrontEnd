import { theme } from "@/App.styled";
import styled from "styled-components";

export const DivContainer = styled.div`
  width: 64px;
  margin-right: ${theme.space["0.5rem"]};

  .NavSectionText {
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.pink[400]};
    font-size: ${theme.fontSizes["1rem"]};
  }
`;
