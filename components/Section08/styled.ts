import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 1000px;

  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.bgGray};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding-left: 30px;
  padding-right: 30px;
`;

export const TextWrapper = styled.div`
  white-space: pre-wrap;
  text-align: center;
  padding-bottom: 80px;

  h1 {
    font-size: 50px;
    line-height: 1.4;
    font-weight: bold;
    font-stretch: normal;
  }
`;

export const TicketWrapper = styled.div`
  display: flex;

  .ticket {
    z-index: 0;
    width: 360px;
  }

  .icon {
    z-index: 10;
    position: absolute;
    margin-top: 134px;
    width: 116px;
  }

  .textWrapper {
    z-index: 10;
    position: absolute;
    width: 216px;
    text-align: center;
    top: 280px;
  }

  h3 {
    font-size: 30px;
    font-weight: bold;
  }

  h4 {
    margin-top: 30px;
    font-size: 18px;
    line-height: 1.8;
    white-space: pre-wrap;
  }
`;

export const Contents = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
