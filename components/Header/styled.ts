import styled from "styled-components";

interface Scroll {
  yScroll: number;
}

export const Header = styled.header<Scroll>`
  position: fixed;
  z-index: 5;
  background-color: ${(props) => (props.yScroll > 0 ? "white" : "transparent")};
  padding-left: 30px;
  padding-right: 30px;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 90px;
`;

export const Container = styled.div<Scroll>`
  max-width: 1140px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => (props.yScroll > 0 ? "black" : "white")};
  font-size: 16px;

  a {
    cursor: pointer;
  }

  img {
    width: 154.5px;
    height: 50px;
  }

  ul {
    display: flex;
  }

  li {
    margin-right: 50px;
    cursor: pointer;

    &:nth-child(3) {
      cursor: default;
    }
  }
`;
