/* eslint-disable react/jsx-key */
import * as S from "./styled";
import React from "react";
import Slick from "./Slick/slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderData {
  url: string;
  id: number;
  user: string;
  content: string;
}
interface Props {
  data: SliderData[];
}


const Section09: React.FC<Props> = () => {

  return (
    <S.Section>
      <S.BackgroundFilter>
        <Slick />
      </S.BackgroundFilter>
    </S.Section>
  );
};

export default Section09;
