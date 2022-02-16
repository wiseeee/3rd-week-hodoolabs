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
export const SlideTopWrap = styled.ul`
  display: flex;
  position: relative;
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
export const SilderId = styled.div`
  color: #fff;
  font-size: 17px;
  line-height: 1.8;
  opacity: 0.7;
  text-align: center;
  padding-bottom: 50px;
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
export const ImgWrap = styled.div`
  margin: 0 auto;
  opacity: 0;
`;
export const SlideImgWrap = styled.div`

`;