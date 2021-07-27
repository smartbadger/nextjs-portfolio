import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  @font-face {
    font-family: 'Montserrat';
    src: url('fonts/montserrat/Montserrat-Light.woff2') format('woff2'),
        url('fonts/montserrat/Montserrat-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url('fonts/montserrat/Montserrat-SemiBoldItalic.woff2') format('woff2'),
        url('fonts/montserrat/Montserrat-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url('fonts/montserrat/Montserrat-Italic.woff2') format('woff2'),
        url('fonts/montserrat/Montserrat-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url('fonts/montserrat/Montserrat-LightItalic.woff2') format('woff2'),
        url('fonts/montserrat/Montserrat-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url('fonts/montserrat/Montserrat-Regular.woff2') format('woff2'),
        url('fonts/montserrat/Montserrat-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url('fonts/montserrat/Montserrat-Black.woff2') format('woff2'),
        url('fonts/montserrat/Montserrat-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url('fonts/montserrat/Montserrat-BlackItalic.woff2') format('woff2'),
        url('fonts/montserrat/Montserrat-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url('fonts/montserrat/Montserrat-SemiBold.woff2') format('woff2'),
        url('fonts/montserrat/Montserrat-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'heading';
    src: local('Montserrat');
}

* {
  font-family: 'Montserrat', Sans-Serif;
  box-sizing: border-box;
}

  
  html,
  body {
    margin: 0;
    padding: 0;
    overflow: overlay;
  }
  body::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px 1px rgb(0 0 0 / 30%);
        border-radius: 10px;
        background-color: transparent;
    }

    body::-webkit-scrollbar
    {
        width: 0.5rem;
        background-color: #F5F5F500;
    }

    body::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 3px 1px rgb(0 0 0 / 50%);
        background-color: #4a4a4a;
    }

`;
export default GlobalStyle;
