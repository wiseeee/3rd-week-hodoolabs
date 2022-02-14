import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    orange: "#FFB100",
    black: "#333333",
  },
  filter: {
    boxShadow: "drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.1))"
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1200),
  mobile: customMediaQuery(768),
};
