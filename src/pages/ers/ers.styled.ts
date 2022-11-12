import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  width: 100%;
  margin-top: 6px;
  margin-left: auto;

  div {
    /* display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 6px;
    margin-left: auto; */

    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 5px;
    align-items: center;
    justify-content: center;
  }

  .ERTableContent{
    padding-top:20px;
  }
  .ERContent{
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 6px;
    margin-left: auto;
  }
`;
