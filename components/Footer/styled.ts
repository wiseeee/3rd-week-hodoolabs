import styled from 'styled-components';
import { media } from "styles/theme";

export const FooterWrap = styled.footer`
  display: flex;
  justify-content: space-between;
  max-width: 1140px;
  margin: 0 auto;
  padding: 60px 0;
  ${media.pc} {
    flex-direction: column;
    padding: 60px 30px;
  }
  ${media.mobile} {
    flex-direction: column;
    padding: 60px 30px;
  }
`;
export const FooterLeft = styled.div`
  > div {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
  }
  > div > a{
    text-decoration: underline;
    padding-left: 5px;
  }
  span {
    display: block;
    font-size: 14px;
    line-height: 24px;
    &:last-child {
      padding-top: 20px;
    }
  }
  ${media.mobile} {
    font-size: 14px;
  }
`;
export const FooterLogo = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  padding-bottom: 20px;
`;
export const FooterRight = styled.div`
`;
export const RightBoxWrap = styled.div`
  font-size: 16px;
  line-height: 28px;
  > div {
    display: flex;
  }
  > a > strong {
    font-weight: 700;
  }
`;
export const MediaWrap = styled.div`
  display: flex;
  margin-top: 30.5px;
`;
export const MediaCircle = styled.div`
  border-radius: 50%;
  border: 1.5px solid #EEEEEE;
  width: 42.9px;
  height: 42.9px;
  margin-right: 21px;
  position: relative;
  > img {
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ${media.mobile} {
    flex-direction: column;
    width: 60px;
    height: 60px;
  }
`;
