import { theme } from "@/App.styled";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
  text-align:center;
  width:100%;
  word-spacing: ${theme.letterSpacings.widest};

  div {
    display: flex;
    direction: row;
    width:100%;
    word-spacing: ${theme.letterSpacings.widest};
  }

  .PaginationButton {
    font-size: 12px;
    width: 24px;
  }

  .PaginationButtonSelected {
    color: ${theme.colors.pink[600]};
  }
`;
