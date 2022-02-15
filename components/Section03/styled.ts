import styled from "styled-components";

export const Section = styled.section`
  height: 938px;
  width: 100%;
  overflow-x: hidden;
  background-image: url("https://ddangkongschool.com/447b61faa9f2c83c464b4effe7cde86e.png");
  background-size: cover;
  background-color: rgb(255, 255, 255);
  background-position: center center;
  background-repeat: no-repeat no-repeat;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  align-items: center;
`;

export const TextWrapper = styled.div`
  width: 290px;

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

export const TabletVideo = styled.div`
  width: 1118px;
  height: 880px;
  position: relative;

  img {
    width: 100%;
  }

  video {
    position: absolute;
    top: 95px;
    left: 106px;
    width: 740px;
    height: 557px;
    border-radius: 20px;
  }
`;
