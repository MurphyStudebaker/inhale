import { createGlobalStyle } from "styled-components";
import { DurationContext } from "../context/DurationContext";
import { useStickyState } from "../hooks/useStickyState";

function MyApp({ Component, pageProps }) {
  const [duration, setDuration] = useStickyState(3, "meditation-duration");

  return (
    <DurationContext.Provider value={{ duration, setDuration }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </DurationContext.Provider>
  );
}

const GlobalStyle = createGlobalStyle`
  html {
    --spacing: 8px;
    --color-primary: #14233e;
    --color-darker: rgb(17, 24, 39);
    --white: #fefefe;
    --white-lighter: hsla(0, 100%, 100%, 0.8);
    --radius: 8px;
    --animation-timing: 300ms;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1.1rem;
    color: var(--white-lighter);
    background-color: var(--color-primary);
  }

  /*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  #root, #__next {
    isolation: isolate;
  }

  /* 
    Universally Applicable Element Styles
  */
  button {
    background-color: transparent;
    color: inherit;
    border: none;
    transition: color var(--animation-timing);
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all var(--animation-timing);
  }

  a:hover {
    color: var(--white);
  }
`;

export default MyApp;
