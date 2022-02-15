import * as S from "./styled";
import useScrollFadeIn from "hooks/useScrollFadeIn";

const TABLET_MOCKUP =
  "https://ddangkongschool.com/846f50a75a26614fdd5ec2b06f49660f.png";
const VIDEO =
  "https://ddks-front-dev.s3.ap-northeast-1.amazonaws.com/media/main_video.ccd1f367.mp4";

const Section03: React.FC = () => {
  const firstAnimated = useScrollFadeIn("up", 1, 0);
  const secondAnimated = useScrollFadeIn("up", 1, 0.1);

  return (
    <S.Section>
      <S.Wrapper>
        <S.TextWrapper>
          <h1 {...firstAnimated}>랜선 라이브 북클래스</h1>
          <h3 {...secondAnimated}>
            {
              "친구들과 함께 \n그림 그리기, 퀴즈 풀기, \n선생님과 대화하며 경험해요!"
            }
          </h3>
        </S.TextWrapper>
        <S.TabletVideo>
          <img src={TABLET_MOCKUP} alt="tablet" />
          <video src={VIDEO} autoPlay={true} loop={true} muted={true} />
        </S.TabletVideo>
      </S.Wrapper>
    </S.Section>
  );
};

export default Section03;
