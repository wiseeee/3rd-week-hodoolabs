import * as S from "./styled";
import useScrollFadeIn from "hooks/useScrollFadeIn";

const Section05: React.FC = () => {
  const firstAnimated = useScrollFadeIn("up", 1, 0);
  const secondAnimated = useScrollFadeIn("up", 1, 0.1);

  return (
    <S.Section>
      <S.Wrapper>
        <S.TextWrapper>
          <h1 {...firstAnimated}>
            {"실시간 방송 형태로 제공되는\n신개념 책 읽기"}
          </h1>
          <h3 {...secondAnimated}>
            {
              "방송 중이라면 언제든 접속하세요.\n수강신청, 수업예약 없이 편하게 수업참여가 가능해요."
            }
          </h3>
        </S.TextWrapper>
        <img src="/images/section05_mockups.png" alt="mockups" />
      </S.Wrapper>
    </S.Section>
  );
};

export default Section05;
