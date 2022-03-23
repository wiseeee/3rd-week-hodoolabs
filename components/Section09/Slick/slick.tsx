/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useMemo, useState} from 'react';
import Slider, { Settings } from 'react-slick';
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
  autoplay = false,
  speed = 500,
  loop = true,
}: sliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = useMemo<Settings>(
    () => ({
      dots: false,
      infinite: loop,
      speed: speed,
      slidesToShow: 1,
      autoplay: Boolean(autoplay),
      autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
      beforeChange: (slide, newSlide) => setCurrentSlide(newSlide)
    }),
    [autoplay, loop, speed],
  );

  console.log(currentSlide)
  

  return (
    <>
      <S.SlideWrapper>
        <S.SlideTopWrap>
          <S.RotatePath index={currentSlide}>
            <img src= "/images/section09_path.png" />
          </S.RotatePath>
          <S.ChangeImg>
          <img src= {sliderData.data[currentSlide].url}  />
          </S.ChangeImg>
        </S.SlideTopWrap>
        <Slider {...settings}>
          {sliderData.data.map((item, index) => (
            <S.SliderItem key={index} id={item.id}>
              <S.SliderId>
                {item.user}
              </S.SliderId>
              <S.SliderContent>
                {item.content}
              </S.SliderContent>
            </S.SliderItem>
          ))}
        </Slider>
        <S.SliderProgressBar index={currentSlide + 1}>

        </S.SliderProgressBar>
      </S.SlideWrapper>
    </>
  );
}

export default Slick;
