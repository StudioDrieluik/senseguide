import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    // Colors
    --color-primary: #ffa500;
    --color-primary-light: #ffc04d;
    --color-secondary: #6a5acd;
    --color-white: #ffffff;
    --color-black: #000000;
    --color-bg: #ffffff;
    --color-text-dark: #000000;
    --color-text-light: #ffffff;
    // Fonts
    --font-primary: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --font-secondary: "TestFont", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --font-size-xs: 0.4rem;
    --font-size-sm: 0.8rem;
    --font-size-base: 1.6rem;
    --font-size-md: 2rem;
    --font-size-lg: 2.6rem;
    --font-size-xl: 3.8rem;
    // Layouts
    --max-container-width: '1600px';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;;
  }

  main {
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    position: relative;
    padding: 0;
    margin: 0;
    min-height: 100vh;
    width: 100%;
    line-height: 1.4;
    font-family: var(--font-primary);
    background-color: var(--color-bg);
    background-color: var(--color-bg);
    color: var(--color-text-dark);
    font-size: var(--font-size-base);
    overscroll-behavior-y: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: 1;
  }

  p, ul {
    margin: 0;
    padding: 0;

    + p,
    + a,
    + h2,
    + h3,
    + h4,
    + ul {
      margin: 1.5rem 0 0;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%
  }

  input {
    font-family: inherit;
  }

`;

export default GlobalStyle;
