import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    html{
        font-size: 24px;
        -webkit-text-size-adjust: none;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif,'Noto Sans KR', sans-serif;;       
        font-display: fallback;
        ${media.mobile}{
            font-size: 10px;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
        a {
          color: inherit;
          text-decoration: none;
          cursor: pointer;
        }
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }

    .pc-tablet-only {
        display: block;
        ${media.mobile} {
            display: none;
        }
    }
    .mobile-only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }
`;
