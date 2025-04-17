import { CustomThemeType } from "@/styles/theme";
import { css } from "@emotion/react";

export const globalStyle = (theme: CustomThemeType) => css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${theme.colors.text};
  }

  html,
  body {
    font-family: sans-serif;
    scrollbar-gutter: stable;
    font-size: 10px;
  }
`;
