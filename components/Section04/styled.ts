import styled from "styled-components";

export const Section = styled.section`
  height: 650px;
  width: 100%;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.color.bgGray};
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 150px;
  margin-bottom: 150px;
`;

export const TextWrapper = styled.div`
  width: 354px;

  h1 {
    font-size: 50px;
    line-height: 1.4;
    text-align: left;
    font-weight: bold;
    font-stretch: normal;
  }

  h3 {
    margin-top: 50px;
    white-space: pre-wrap;
    font-size: 20px;
    line-height: 1.67;
    text-align: left;
  }
`;

export const ImagesWrapper = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: row;
  margin-left: 160px;
  margin-top: 0px;
  gap: 50px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .check {
    width: 150px;
    height: 100px;
  }

  .book {
    margin-top: 15px;
    width: 150px;
    height: 200px;
  }
`;
