import * as S from "./styled";
import useScrollFadeIn from "hooks/useScrollFadeIn";

const Section01: React.FC = () => {
  const firstAnimated = useScrollFadeIn("up", 1, 0);
  const secondAnimated = useScrollFadeIn("up", 1, 0.1);
  const thirdAnimated = useScrollFadeIn("up", 1, 0.1);
  const fourthAnimated = useScrollFadeIn("up", 1, 0.3);

  return (
    <S.Section>
      <S.TextWrapper>
        <S.StarLine {...fourthAnimated}>
          <img className="star" src="/images/star2.png" alt="star" />
          <img className="line" src="/images/line.png" alt="line" />
        </S.StarLine>
        <S.Span {...firstAnimated}>책 읽는 재미,</S.Span>
        <S.Span {...secondAnimated}>땅콩스쿨이</S.Span>
        <S.Span {...thirdAnimated}>만들어줄게요!</S.Span>
      </S.TextWrapper>
      <S.MouseAnimation>
        <img
          src="https://ddangkongschool.com/82fb322af4738d0bcf0dcf87834209a5.png"
          alt="move-mouse"
        />
      </S.MouseAnimation>
    </S.Section>
  );
};

export default Section01;
