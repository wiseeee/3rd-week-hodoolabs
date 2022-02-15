import styled from "styled-components";
import Slider from "react-slick";

export const Section = styled.section`
  width: 100%;
  height: 924px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
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
`;

export const TextWrapper = styled.div`
  margin-top: 150px;
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

export const SliderWrapper = styled.div`
  padding: 100px 0px 150px 0px;
`;

export const StyledSlider = styled(Slider)`
  .slick-slider {
    width: 100%;
  }

  .slick-slide {
    img {
      height: 250px;
      width: 188px;
    }
  }

  .slick-slide div {
    margin: 0;
    padding: 0;
  }
`;

export const BookWrapper = styled.div`
  height: 250px;
  display: flex;
  flex-direction: row;
`;
