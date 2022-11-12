import { theme } from "@/App.styled";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  justify-content: space-between;
  align-items: center;
  word-spacing: ${theme.letterSpacings.widest};

  div {
    display: flex;
    direction: row;
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
