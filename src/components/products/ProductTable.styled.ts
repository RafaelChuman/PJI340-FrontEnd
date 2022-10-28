import styled from "styled-components";

export const TableContainer = styled.table`
  thead {
    tr {
      th {
        padding-left: 6px;
        color: var(--gray.300);
        width: 8;

        .CheckBox {
          color: var(--pink.300);
        }
      }
    }
  }
  tbody {
    tr {
      td {
        .InputButton {
          width: 16px;
          font-size: 16px;
          color: var(--purple);
          padding: 3px;
          margin: 0;
        }

        .InputText {
          font-weight: "bold";
        }

        img {
          border-radius: 4px;
          border: 1px;
          border-color: var(--gray.900);
          width: 150px;
          object-fit: cover;
        }
      }
    }
  }
`;
