import settings, { BOOKS_IMAGE_URL } from "./settings";
import useScrollFadeIn from "hooks/useScrollFadeIn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./styled";

const Section07: React.FC = () => {
  const firstAnimated = useScrollFadeIn("up", 1, 0);
  const secondAnimated = useScrollFadeIn("up", 1, 0.1);

  return (
    <S.Section>
      <S.Wrapper>
        <S.TextWrapper>
          <h1 {...firstAnimated}>
            {"입학 전 1000권 읽기!\n땅콩스쿨로 도전해보세요."}
          </h1>
          <h3 {...secondAnimated}>
            {
              "매달 새로운 32권의 어린이 베스트 셀러를 만날 수 있어요.\n독서를 통해 배움의 즐거움을 알아가 보세요."
            }
          </h3>
        </S.TextWrapper>
      </S.Wrapper>
      <S.SliderWrapper>
        <S.StyledSlider {...settings}>
          {BOOKS_IMAGE_URL.map((url, index) => (
            <div key={index} style={{ width: 100 }}>
              <img src={url} />
            </div>
          ))}
        </S.StyledSlider>
      </S.SliderWrapper>
    </S.Section>
  );
};

export default Section07;
