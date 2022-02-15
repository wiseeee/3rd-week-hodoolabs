import * as S from "./styled";
import useScrollFadeIn from "hooks/useScrollFadeIn";

const Section02: React.FC = () => {
  const firstAnimated = useScrollFadeIn("up", 1, 0);
  const secondAnimated = useScrollFadeIn("up", 1, 0.1);
  const thirdAnimated = useScrollFadeIn("up", 1, 0.2);

  return (
    <S.Section>
      <img
        src="/images/section02_animation.gif"
        alt="peanut-logo"
        {...firstAnimated}
      />
      <h1 {...secondAnimated}>땅콩스쿨이란?</h1>
      <S.SpanWrapper {...thirdAnimated}>
        <span>실시간(LIVE)으로, 아이들이 좋아하는 캐릭터 선생님을 통해,</span>
        <span>
          친구들과 함께 창의독서, 퀴즈 등을 재미있게 즐길 수 있는 온라인
          서비스입니다.
        </span>
      </S.SpanWrapper>
    </S.Section>
  );
};

export default Section02;
