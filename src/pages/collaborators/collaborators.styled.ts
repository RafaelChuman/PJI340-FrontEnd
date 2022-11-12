import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 6px;
  padding: 6px;
  align-items:center;
  justify-content:center;

  .FormContent {
    display:flex;
    align-items:center;
    flex-direction:column;
    width: 100%;
    margin-top: 6px;
    direction: column;
    gap: 10px;
    margin-left: auto;
    padding: 6px;
  }



  .TreatmentTableContainer {
    display:flex;
    align-items:center;
    justify-content:center;
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
