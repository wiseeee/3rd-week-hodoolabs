import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 130px;
  padding-bottom: 150px;
  position: relative;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.orange};
  color: white;

  img {
    width: 134px;
    height: 100px;
  }

  h1 {
    margin-top: 10px;
    font-size: 50px;
    font-family: "S-CoreDream-3Light";
  }

  @font-face {
    font-family: "S-CoreDream-3Light";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

export const SpanWrapper = styled.div`
  margin-top: 50px;
  margin-right: 0px;
  margin-bottom: 0px;
  text-align: center;

  span {
    font-size: 24px;
    line-height: 1.67;
    display: block;
  }
`;
