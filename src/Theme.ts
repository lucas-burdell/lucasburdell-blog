import * as styledComponents from "styled-components";

// https://coolors.co/ebe9e9-f3f8f2-3581b8-fcb07e-dee2d6
export const theme = {
  primary: {
    light: "#1299E2",
    medium: "#0C6291",
    dark: "#063751"
  },
  background: {
    light: "#D0D0D0",
    medium: "#17171B",
    dark: "#000004"
  },
  accent: {
    light: "#FCC5A1",
    medium: "#FCB07E",
    dark: "#73503A"
  }
};

const {
  default: styled,
  css,
  createGlobalStyle,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  typeof theme
>;

export default styled;
export { css, createGlobalStyle };
