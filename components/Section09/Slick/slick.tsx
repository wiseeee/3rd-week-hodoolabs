/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useMemo, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import useInterval from 'hooks/useHook';
import sliderData from 'public/images/sliderData.json'
import * as S from "../styled";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface sliderProps {

  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;
}

function Slick({
  className,
  autoplay = false,
  speed = 500,
  loop = true,
}: sliderProps) {
  const settings = useMemo<Settings>(
    () => ({
      dots: false,
      infinite: loop,
      speed: speed,
      slidesToShow: 1,
      autoplay: Boolean(autoplay),
      autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
    }),
    [autoplay, loop, speed],
  );
  return (
    <><S.SlideWrapper className={className}>
      <Slider {...settings}>
        {sliderData.data.map((item, index) => (
          <S.SliderItem key={index}>
            <S.ImgWrap>
              <img src={item.url} id={item.id} />
            </S.ImgWrap>
            <S.SilderId>
              {item.user}
            </S.SilderId>
            <S.SliderContent>
              {item.content}
            </S.SliderContent>
          </S.SliderItem>
        ))}
      </Slider>
    </S.SlideWrapper>
      </>
  );
}

export default Slick;
