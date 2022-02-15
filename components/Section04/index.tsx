import * as S from "./styled";
import useScrollFadeIn from "hooks/useScrollFadeIn";

const CHECK_GIF =
  "https://ddks-front.s3.ap-northeast-1.amazonaws.com/img/btn_check_1.9f65cadf.gif";

const BOOK = {
  FIRST: "https://ddangkongschool.com/3e736e1edc870f27008ecbea9ef881f1.png",
  SECOND: "https://ddangkongschool.com/34718c626c38a2e63082d41f0aa9224e.png",
  THIRD: "https://ddangkongschool.com/a83ae3ee0f6c92b538cb45939f7c9363.png",
};

const Section04: React.FC = () => {
  const firstAnimated = useScrollFadeIn("up", 1, 0);
  const secondAnimated = useScrollFadeIn("up", 1, 0.1);
  const thirdAnimated = useScrollFadeIn("stay", 1, 0.3);
  const fourthAnimated = useScrollFadeIn("stay", 1, 0.5);
  const fifthAnimated = useScrollFadeIn("stay", 1, 0.7);

  return (
    <S.Section>
      <S.Wrapper>
        <S.TextWrapper>
          <h1 {...firstAnimated}>{"교육 전문가들이 \n선정한 도서"}</h1>
          <h3 {...secondAnimated}>
            {
              "호두랩스의 교육 전문가들이\n교과 수록, 초등 필독 도서 등\n아동 교육에 적합한 도서를\n직접 선정해요!"
            }
          </h3>
        </S.TextWrapper>
        <S.ImagesWrapper>
          <div>
            <div {...thirdAnimated}>
              <img className="check" src={CHECK_GIF} alt="check-gif" />
            </div>
            <img className="book" src={BOOK.FIRST} alt="first-book" />
          </div>
          <div>
            <div {...fourthAnimated}>
              <img className="check" src={CHECK_GIF} alt="check-gif" />
            </div>
            <img className="book" src={BOOK.SECOND} alt="first-book" />
          </div>
          <div>
            <div {...fifthAnimated}>
              <img className="check" src={CHECK_GIF} alt="check-gif" />
            </div>
            <img className="book" src={BOOK.THIRD} alt="first-book" />
          </div>
        </S.ImagesWrapper>
      </S.Wrapper>
    </S.Section>
  );
};

export default Section04;
