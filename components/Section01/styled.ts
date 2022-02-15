import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  width: 100%;
  background-image: url("https://ddangkongschool.com/8358b32838f4b212cf113ad6c4ea9996.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  padding-left: 0px;
  padding-right: 0px;
  max-width: 1140px;
  width: 100%;
  position: absolute;
  top: 230px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const StarLine = styled.div`
  .star {
    position: absolute;
    top: 60px;
    left: -23px;
    width: 51.42px;
  }

  .line {
    position: absolute;
    top: 157px;
    left: 2px;
    width: 220px;
  }
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: 60px;
  line-height: 80px;
  color: white;
`;

export const MouseAnimation = styled.div`
  width: 3.8%;
  min-width: 48px;
  position: absolute;
  animation: motion 0.7s 0s infinite alternate;
  display: block;
  bottom: 0px;
  padding-bottom: 50px;
  left: 50%;

  @keyframes motion {
    0% {
      bottom: 0px;
    }
    to {
      bottom: 100px;
    }
  }

  img {
    width: 72px;
    height: 72px;
    bottom: 50px;
    margin-top: 0px;
    margin-right: auto;
  }
`;
