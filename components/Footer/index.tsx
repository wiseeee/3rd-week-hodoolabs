import React from 'react';
import * as S from './styled';

const Footer: React.FC = () => {

  return (
    <S.FooterWrap>
      <S.FooterLeft>
      <S.FooterLogo>
      (주) 호두랩스
      </S.FooterLogo>
        <div>
        <span>대표 : 김민우 | 사업자등록번호 : 431-88-01287</span>
          <a href='#'>사업자 정보 조회</a>
        </div>
        <span>서울특별시 강남구 언주로 637, 12층 (논현동, 싸이칸홀딩스타워)</span>
        <span>제주특별시 서귀포시 중정로 86, 304</span>
        <span>© Hodoo Labs. ALL RIGHTS RESERVED</span>
      </S.FooterLeft>
      <S.FooterRight>
        <S.RightBoxWrap>
          <div>
            <a href='#'>고객센터</a>
            <a href='#'>채팅상담</a>
          </div>
          <div>
            <a href='#'>이용약관</a>
            <a href='#'><strong>개인정보 처리방침</strong></a>
            <a href='#'>환불정책</a>
          </div>
          
        </S.RightBoxWrap>
        <S.MediaWrap>
          <S.MediaCircle><img src="/images/instargram.png" alt="인스타그램" /></S.MediaCircle>
          <S.MediaCircle><img src="/images/blog.png" alt="블로그"/></S.MediaCircle>
        </S.MediaWrap>
      </S.FooterRight>
      
    </S.FooterWrap>
  )
};

export default Footer;