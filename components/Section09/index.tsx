/* eslint-disable react/jsx-key */
import * as S from "./styled";
import React from 'react';
import sliderData from 'public/images/sliderData.json'
import Slick from './Slick/slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

type Props = {
  sliderData: { url: string; id: number; user: string; content: string; }[];
  index: number;
};

const Section09: React.FC<Props> = () => {
  const slideList = sliderData.data.map((item) =>
    <li>
      <img src={item.url} id ={item.id}/>
    </li>
  );

  
  return (
    <S.Section>
      <S.BackgroundFilter>
        <S.SlideTopWrap>
          {slideList}
        </S.SlideTopWrap>
        <Slick />
      </S.BackgroundFilter>
    </S.Section>
    );
  };

export default Section09;
