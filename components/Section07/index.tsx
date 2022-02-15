import settings from "./settings";
import useScrollFadeIn from "hooks/useScrollFadeIn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./styled";

const BASE_URL = "https://ddangkongschool.com";

const BOOKS_IMAGE_URL = [
  `${BASE_URL}/474113b7a462536f3ca1955b7fec6bbb.png`,
  `${BASE_URL}/627d7b2ad2821586a58450e0dc871a3d.png`,
  `${BASE_URL}/657c46360efed4fa0ccb656bfac398f0.png`,
  `${BASE_URL}/4da5edcf4bea762206b0059962021dcc.png`,
  `${BASE_URL}/da96593c7493f242ef328db64fb7746d.png`,
  `${BASE_URL}/a0fbbb3a1186a1d7183d940624be114d.png`,
  `${BASE_URL}/b2bf823874937bca0b269f06c7c00fb9.png`,
  `${BASE_URL}/3cb2b06e2e0e22c7b5fa8e6245396317.png`,
  `${BASE_URL}/9f314886272fbd7e8cd10dd9329e6c5a.png`,
  `${BASE_URL}/153f54f0072d2126def81f6fcae5958c.png`,
  `${BASE_URL}/c0e0bac49fe7efacb533befaafe79738.png`,
  `${BASE_URL}/471b07fc6c22192fe9e0a861c59e9369.png`,
  `${BASE_URL}/fac66aeef4521c3961a3f5b3d36984db.png`,
];

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
