import * as S from "./styled";
import useScrollFadeIn from "hooks/useScrollFadeIn";

const BASE_URL = "https://ddangkongschool.com";

const TICKET = [
  `${BASE_URL}/ff074222d16cdd912139f3667a8b8fbc.png`,
  `${BASE_URL}/57603d30a51327770262c992f6430877.png`,
  `${BASE_URL}/3295d4a45766e8fc75b9c93bb837af83.png`,
];

const ICON = [
  {
    url: `${BASE_URL}/6cf30f0d183ce37d966de153ba1db840.png`,
    title: "화상수업",
    content:
      "휴대폰이나 태블릿으로\n시간이나 장소 관계없이\n편하게 수업을 들어보세요.",
  },
  {
    url: `${BASE_URL}/1c50cd83b3958adf9fab132c6ba16211.png`,
    title: "양방향",
    content:
      "화면에 그림도 그려보고,\n읽은 책으로 선생님과\n퀴즈도 풀어보는 양방향\n수업을 경험해보세요",
  },
  {
    url: `${BASE_URL}/fb565eae8b6b4ca647d7649acc46b7e6.png`,
    title: "캐릭터",
    content: "친숙한 캐릭터와\n목소리로 수업에 대한\n부담을 낮춰보세요.",
  },
];

const Section08: React.FC = () => {
  const firstAnimated = useScrollFadeIn("up", 1, 0);

  return (
    <S.Section>
      <S.Wrapper>
        <S.TextWrapper>
          <h1 {...firstAnimated}>{"땅콩스쿨만의 특징"}</h1>
        </S.TextWrapper>
        <S.TicketWrapper>
          {TICKET.map((url, index) => {
            const animated = useScrollFadeIn("up", 1, 0.1 * (index + 1));

            return (
              <S.Contents key={index} {...animated}>
                <img className="ticket" src={url} />
                <img className="icon" src={ICON[index].url} />
                <div className="textWrapper">
                  <h3>{ICON[index].title}</h3>
                  <h4>{ICON[index].content}</h4>
                </div>
              </S.Contents>
            );
          })}
        </S.TicketWrapper>
      </S.Wrapper>
    </S.Section>
  );
};

export default Section08;
