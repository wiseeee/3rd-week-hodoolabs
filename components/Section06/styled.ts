import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding-top: 150px;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 0px;

  img {
    padding-top: 80px;
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  white-space: pre-wrap;
  text-align: center;

  h1 {
    font-size: 50px;
    line-height: 1.4;
    font-weight: bold;
    font-stretch: normal;
  }

  h3 {
    margin-top: 50px;
    font-size: 20px;
    line-height: 1.67;
  }
`;
