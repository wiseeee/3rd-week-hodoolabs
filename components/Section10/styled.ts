import styled from "styled-components";
import { media, theme } from "styles/theme";

export const Section = styled.section`
  background-color: #f9f9f9;
  max-width: 1140px;
  margin: 0 auto;
  padding: 150px 20px;
`;
export const SectionTop = styled.div`
  font-weight: bold;
  font-size: 50px;
  line-height: 70px;
  text-align: center;
  word-break: keep-all;
`;
export const CouponWrap = styled.div`
  display: flex;
  position: relative;
  width: 1240px;
  height: 534px;
  > img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  > div {
    z-index: 2;
  }
  @media (max-width: 1200px) {
    width: 1088px;
    height: 534px;
  }
  @media (max-width: 1088px) {
    width: 994px;
    height: 534px;
  }
  @media (max-width: 994px) {
    width: 900px;
    height: 570px;
  }
  @media (max-width: 900px) {
    width: 808px;
    height: 534px;
    margin-bottom: 80px;
  }
  @media (max-width: 768px) {
    width: 360px;
    height: 613px;
    flex-direction: column;
    margin: 60px auto 116px;
  }
`;
export const CouponLeft = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  width: 640px;
  padding-left: 140px;
  padding-top: 124px;
  > img {
    height: 30px;
  }
  ${media.mobile} {
    > img {
      height: 18px;
    }
  }
  @media (max-width: 1200px) {
    width: 591px;
    padding-left: 93px;
    padding-top: 124px;
  }
  @media (max-width: 1088px) {
    width: 572px;
    padding-left: 79px;
    padding-top: 124px;
  }
  @media (max-width: 994px) {
    width: 436px;
    padding-left: 83px;
    padding-top: 124px;
  }
  @media (max-width: 900px) {
    width: 407px;
    padding-left: 66px;
    padding-top: 124px;
  }
  @media (max-width: 768px) {
    width: 360px;
    padding-top: 102px;
    padding-left: 0px;
  }
`;
export const CouponRight = styled.div`
  box-sizing: border-box;
  padding-left: 220px;
  padding-top: 182px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1200px) {
    padding-left: 140px;
    padding-top: 182px;
  }
  @media (max-width: 1088px) {
    padding-left: 92px;
    padding-top: 182px;
  }
  @media (max-width: 994px) {
    padding-left: 103px;
    padding-top: 200px;
  }
  @media (max-width: 900px) {
    padding-left: 80px;
    padding-top: 198px;
  }
  @media (max-width: 768px) {
    padding-top: 107px;
    padding-left: 0;
  }
`;
export const CouponTitle = styled.div`
  font-size: 50px;
  line-height: 72px;
  white-space: pre-wrap;
  word-break: keep-all;
  text-align: center;
  padding-top: 30px;
  ${media.mobile} {
    font-size: 36px;
    line-height: 45px;
    padding-top: 10px;
  }
`;
export const CouponSub = styled.div`
  font-size: 20px;
  line-height: 36px;
  white-space: pre-wrap;
  word-break: keep-all;
  text-align: center;
  padding-top: 30px;
  br {
    display: none;
  }
  @media (max-width: 994px) {
    br {
      display: block !important;
    }
  }
  ${media.mobile} {
    font-size: 14px;
    line-height: 25px;
    padding-top: 10px;
  }
`;
export const DownloadCaption = styled.div`
  display: inline-block;
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  color: #f9f9f9;
  padding: 10px 15px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  margin-bottom: 17px;
  position: relative;
  :after {
    content: "";
    display: block;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 5px 0 5px;
    border-color: rgba(0, 0, 0, 0.5) transparent transparent transparent;
  }
  ${media.mobile} {
    font-size: 14px;
    padding: 5px 20px;
  }
`;
export const ButtonBlack = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  color: #f9f9f9;
  padding: 19px 40px;
  background: #333333;
  border-radius: 50px;
  ${media.mobile} {
    font-size: 14px;
    border-radius: 10px;
    padding: 10px 50px;
  }
  > img {
    width: 20px;
    padding-right: 17px;
  }
`;
