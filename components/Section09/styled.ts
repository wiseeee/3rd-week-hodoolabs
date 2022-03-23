import styled from "styled-components";
import { media } from "styles/theme";

export const Section = styled.section`
  background: url('/images/section09_background.png') center center / cover no-repeat;
  background-attachment: fixed;
  position: relative;
`;
export const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 100px 0 50px 0;
`;
export const SlideTopWrap = styled.div`
  display: flex;
  position: relative;
  height: 150px;
  > li {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }
  > li > img {
    width: 50%;
  }
  ${media.mobile} {
    > li > img {
      width: 50%;
    }
  }
`;
export const RotatePath = styled.div<{ index: number }>`
  position: absolute;
  top: 10px;
  left: 50%;
  width: 122px;
  height: 122px;
  transform-origin: right center ;
  transform: translateX(-50%);
  z-index: 3;
  transition: all 1s ease 0s;
  transform: ${(props) => `rotate(${(props.index) * 45}deg)`};
  margin: -19px 0px 0px -130px;
  padding: 11px 0px 0px 8px;
  > img {
    width: 171px;
  }
  ${media.mobile} {
    width: 90px;
    height: 90px;
    margin: -20px 0px 0px -117px;
    padding: 14px;
    > img {
      width: 142px;
    }
  }
`;
export const ChangeImg = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  > img {
    width: 115px;
  }
  ${media.mobile} {
    > img {
      width: 96px;
    }
  }
`;

export const SliderItem = styled.div`
  width: 100%;
  img{
    max-width: 100%;
    height: auto;
  }
`;

export const SlideWrapper = styled.div`
  width: 720px;
  margin: 0 auto;
  ${media.mobile} {
    width: 60%;
  }
  .slick-slider
  {
    position: inherit;
  }
  .slick-prev,
  .slick-next
  {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    border-radius: 50%;
    border: 2px solid #fff;
    width: 32px;
    height: 32px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    outline: none;
    background: transparent;
  }
  .slick-prev
  {
    left: 30px;
    display: none;
  }
  [dir='rtl'] .slick-prev
  {
    right: 30px;
    left: auto;
  }
  .slick-prev:before
  {
    content: '<';
  }
  [dir='rtl'] .slick-prev:before
  {
    content: '>';
  }

  .slick-next
  {
    right: 30px;
    display: none;
  }
  [dir='rtl'] .slick-next
  {
    right: auto;
    left: 30px;
  }
  .slick-next:before
  {
    content: '>';
  }
  [dir='rtl'] .slick-next:before
  {
    content: '<';
  }
  .slick-prev:before,
  .slick-next:before
{
    font-size: 25px;
    line-height: 1;
    opacity: .75;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-slide {
    position: relative;
  }
`;
export const SliderId = styled.div`
  color: #fff;
  font-size: 17px;
  line-height: 1.8;
  opacity: 0.7;
  text-align: center;
  padding: 50px 0;
`;
export const SliderContent = styled.div`
  white-space: pre-wrap;
  color: #fff;
  font-size: 20px;
  line-height: 1.8;
  word-break: keep-all;
  text-align: center;
  ${media.mobile} {
    font-size: 14px;
  }
`;
export const SliderProgressBar = styled.div<{ index: number }>`
  transition: all 1s ease 0s;
  position: absolute;
  left: 0px;
  bottom: 0px;
  height: 10px;
  background-color: rgb(255, 177, 0);
  width: ${(props) => `${props.index * 20}%`};
`;
