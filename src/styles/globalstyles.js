import {createGlobalStyle, css} from "styled-components";


const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #0b8cd5;
    --color-primary-tint-1: #47b1fa;
    --color-primary-tint-2: #64bbff;
    --color-primary-shade-1: #0575b2;
    --color-primary-shade-2: #035886;

    --color-grey-2: #222;
    --color-grey-3: #312f2f;
    --color-grey-4: #444;
    --color-grey-5: #aaa;


    --color-white-1: #fff;
    --color-white-2: #eee;
    --color-white-3: #ddd;
    --color-white-4: #ccc;

    --color-bubble-1: rgba(0, 81, 255, 0.13);
    --color-bubble-2: rgba(0, 81, 255, 0.26); 
    --color-hero: #f6f9fc;
    --color-dark: #2e475d;
    
    --backdrop-color: rgba(255, 255, 255, 0.1);

    --shadow-sm: 0 0 2px rgba(0, 0, 0, 0.06);
    --shadow-md: 0 0 2.4rem rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 0 3.2rem rgba(0, 0, 0, 0.15);

    --shadow-me-sm: 0 0 3rem rgba(0, 0, 0, 0.05);
    --shadow-me-md: 0 0 2.4rem rgba(0, 0, 0, 0.2);
    --shadow-me-lg: 0 0 1rem rgba(0, 0, 0, 0.3);


    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

    /* For dark mode */
    --image-grayscale: 0;
    --image-opacity: 100%;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    transition: background-color 0.2s;

  }

  html {
    font-size: 62.5%;
  }//10, 9, 8, 7, 6
  @media (max-width: 540px) {
    html {
      font-size: 56.25%; //9px
    }
  }
  body {
    font-weight: 800;
    //font-family: 'LG_GSM_V6.06', sans-serif;
    font-family: 'LG_GSM_V6.06', 'B Nazanin', sans-serif;


    color: var(--color-grey-700);

    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
  }
  * {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &:focus {
      outline: none !important;
    }
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  select:disabled,
  input:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
  }

  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }

  /* Parent selector, finally 😃 */
  button:has(svg) {
    line-height: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img {
    max-width: 100%;

    /* For dark mode */
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
  }

`;

export default GlobalStyles;
