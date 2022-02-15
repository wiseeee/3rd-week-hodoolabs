import * as S from "./styled";
import useScrollFadeIn from "hooks/useScrollFadeIn";

const Section06: React.FC = () => {
  const firstAnimated = useScrollFadeIn("up", 1, 0);
  const secondAnimated = useScrollFadeIn("up", 1, 0.1);

  return (
    <S.Section>
      <S.Wrapper>
        <S.TextWrapper>
          <h1 {...firstAnimated}>{"매일 매일\n알아서 기록하는 독서 일기"}</h1>
          <h3 {...secondAnimated}>
            {
              "오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지 독서일기를 통해 확인해보세요.\n읽기만 해도 자동으로 기록되고, 공유도 가능해요."
            }
          </h3>
        </S.TextWrapper>
        <img src="/images/section06_mockups.png" alt="mockups" />
      </S.Wrapper>
    </S.Section>
  );
};

export default Section06;
