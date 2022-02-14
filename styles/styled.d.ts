import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      orange: "#FFB100";
      black: "#333333";
    };
    filter: {
      boxShadow: "drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.1))";
    };
  }
}
