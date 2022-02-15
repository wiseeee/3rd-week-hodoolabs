import React, {useState, useEffect, useRef} from 'react';
import * as S from './styled';

interface Size {
  width: number;
}
const Section10: React.FC = () => {
  const [size, setSize] = useState<Size>();
  const resizeHandler = () => {
    const width = window.innerWidth;
    setSize({
      width: width,
    });
    if(width > 1200) {
      document.querySelector('img').src ='/images/coupon1200.png'
    } else if (width > 1088) {
      document.querySelector('img').src ='/images/coupon1088.png'
    } else if (width > 994) {
      document.querySelector('img').src ='/images/coupon994.png'
    } else if (width > 900) {
      document.querySelector('img').src ='/images/coupon900.png'
    } else if (width > 768) {
      document.querySelector('img').src ='/images/coupon768.png'
    } else if (width <= 767.9) {
      document.querySelector('img').src ='/images/coupon_mobile.png'
    }
  };

  useEffect(() => {
    window.onresize = resizeHandler;
    const width = window.innerWidth;
    if(width > 1200) {
      document.querySelector('img').src ='/images/coupon1200.png'
    } else if (width > 1088) {
      document.querySelector('img').src ='/images/coupon1088.png'
    } else if (width > 994) {
      document.querySelector('img').src ='/images/coupon994.png'
    } else if (width > 900) {
      document.querySelector('img').src ='/images/coupon900.png'
    } else if (width > 768) {
      document.querySelector('img').src ='/images/coupon768.png'
    } else if (width <= 767.9) {
      document.querySelector('img').src ='/images/coupon_mobile.png'
    }
  }, []);

  return (
    <S.Section>
      <S.SectionTop>지금 다운로드 받으세요!</S.SectionTop>
      <S.CouponWrap>
        <img/>
        <S.CouponLeft>
          <img src="/images/logo_text_white.png" alt="땅콩스쿨 로고"></img>
          <S.CouponTitle>책을 보는<br />새로운 방법</S.CouponTitle>
          <S.CouponSub>지금 가입하시면 <br/>매주 8권의 동화책을 보실 수 있어요!</S.CouponSub>
        </S.CouponLeft>
        <S.CouponRight>
          <S.DownloadCaption>회원가입에 걸리는 시간 단 3초</S.DownloadCaption>
          <S.ButtonBlack>앱 다운로드 하기</S.ButtonBlack>
        </S.CouponRight>
      </S.CouponWrap>
    </S.Section>
  )
};

export default Section10;