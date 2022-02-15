import * as S from "./styled";
import { useScroll } from "hooks/useScroll";

const BLACK_LOGO_URL =
  "https://ddangkongschool.com/b172e73e98d5343a915da6ce9ac4baff.png";
const WHITE_LOGO_URL =
  "https://ddangkongschool.com/99fc850a76600cb2d4c58074a018c441.png";

const Header: React.FC = () => {
  const { y } = useScroll();

  return (
    <S.Header yScroll={y}>
      <S.Container yScroll={y}>
        <a href="#">
          <img src={y > 0 ? BLACK_LOGO_URL : WHITE_LOGO_URL} alt="logo" />
        </a>
        <nav>
          <ul>
            <li>도서구매</li>
            <li>장바구니</li>
            <li>|</li>
            <li>이용권 관리</li>
            <li>로그인/회원가입</li>
          </ul>
        </nav>
      </S.Container>
    </S.Header>
  );
};

export default Header;
