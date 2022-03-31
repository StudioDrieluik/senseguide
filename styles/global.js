import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 62.5%;

    // Colors
    --color-primary-50: #DDDCEA;
    --color-primary-100: #C3C1DE;
    --color-primary-200: #8a88d4;
    --color-primary-300: #7372B6;
    --color-primary-500: #5b5a8b;
    --color-secondary-100: #4593c7;
    --color-secondary-300: #3a7ba7;
    --color-secondary-500: #2b5a7b;
    --color-gold-500: #E7DEC7;
    --color-white: #ffffff;
    --color-gray-100: #F7F7F7;
    --color-gray-200: #EDEDED;
    --color-gray-300: #DADCE0;
    --color-gray-600: #80868B;
    --color-black: #202124;
    --color-bg: var(--color-gray-100);
    --color-text-dark: #202124;
    --color-text-light: #ffffff;

    // Fonts
    --font-primary: "Google Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --font-secondary: "Google Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --font-size-xs: 1.5rem;
    --font-size-sm: 1.6rem;
    --font-size-base: 1.8rem;
    --font-size-md: 2rem;
    --font-size-lg: 2.4rem; // H4
    --font-size-xl: 2.8rem; // H3
    --font-size-xxl: 3.2rem; // H2
    --font-size-xxxl: 4.6rem; // H1
    --font-weight-medium: 500;
    --font-weight-bold: 700;

    @media (${({ theme }) => theme.respondTo.desktop}) {
      --font-size-lg: 2.6rem;
      --font-size-xl: 3.2rem;
      --font-size-xxl: 4rem;
      --font-size-xxxl: 6.4rem;
    }

    // Layouts
    --max-container-width: 1600px;
    --large-container-width: 996px;
    --medium-container-width: 789px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    // Settings
    --border-radius: 0.8rem;
    --component-spacing: 16rem;
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
    line-height: 1.55;
    font-family: var(--font-primary);
    background-color: var(--color-bg);
    background-color: var(--color-bg);
    color: var(--color-text-dark);
    font-size: var(--font-size-base);
    overscroll-behavior-y: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 2.4rem;
    line-height: 1.1;
  }

  h1 {
    font-size: var(--font-size-xxxl);
    letter-spacing: -1px;
  }

  h2 {
    font-size: var(--font-size-xxl);
    letter-spacing: -0.6px;
  }

  h3 {
    font-size: var(--font-size-xl);
    letter-spacing: -0.2px;
  }

  h4 {
    font-size: var(--font-size-lg);
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
      margin-top: 1em;
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
