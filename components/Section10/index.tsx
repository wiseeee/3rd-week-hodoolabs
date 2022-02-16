/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import useScrollFadeIn from "hooks/useScrollFadeIn";
import * as S from './styled';
interface Url {
  url: string;
}
const Section10: React.FC = () => {
  const [url, setUrl] = useState<Url>()
  const firstAnimated = useScrollFadeIn("up", 1, 0);
  
  const resizeHandler = () => {
    const width = window.innerWidth;
    let url;
    if(width > 1200) {
      url = 'coupon1200'
    } else if (width > 1088) {
      url = `coupon1088`
    } else if (width > 994) {
      url = `coupon994`
    } else if (width > 900) {
      url = `coupon900`
    } else if (width > 768) {
      url = `coupon768`
    } else if (width <= 767.9) {
      url = `coupon_mobile`
    }
    setUrl(url);
  };

  useEffect(() => {
    window.onresize = resizeHandler;
    resizeHandler();
  }, []);

  return (
    <S.Section>
      <S.SectionTop {...firstAnimated}>지금 다운로드 받으세요!</S.SectionTop>
      <S.CouponWrap>
        <img alt="쿠폰이미지" src={`/images/${url}.png`}/>
        <S.CouponLeft>
          <img src="/images/logo_text_white.png" alt="땅콩스쿨 로고" />
          <S.CouponTitle>책을 보는<br />새로운 방법</S.CouponTitle>
          <S.CouponSub>지금 가입하시면 <br/>매주 8권의 동화책을 보실 수 있어요!</S.CouponSub>
        </S.CouponLeft>
        <S.CouponRight>
          <S.DownloadCaption>회원가입에 걸리는 시간 단 3초</S.DownloadCaption>
          <S.ButtonBlack><img src="/images/download_icon.png" alt="다운로드 아이콘" />앱 다운로드 하기</S.ButtonBlack>
        </S.CouponRight>
      </S.CouponWrap>
>>>>>>> wiseee
    </S.Section>
  )
};

export default Section10;