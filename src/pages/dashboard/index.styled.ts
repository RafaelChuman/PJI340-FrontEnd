import styled from "styled-components";

const Container = styled.div`
  width: "100%";
  margin-top: 6px maxWidth=1480px;
  margin-left: auto;
  padding: 6px;

  .GridContainer {
    width: 100%;
    margin-top: 6px;
    direction: column;
    gap: 4px;
    margin-left: auto;
    padding: 6px;
  }

  .GridContent {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4px;
    align-items: center;
  }

  .TreatmentTableContainer {
    padding: 8px;
    background-color: var(--gray.80);
    border-radius: 8px;
    padding-bottom: 4px;
  }

  .ChartDataContainer {
    padding: 8px;
    background-color: var(--gray.800);
    border-radius: 8px;
    padding-bottom: 4px;
  }
`;
