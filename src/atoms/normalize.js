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

* {
  font-family: 'Montserrat', Sans-Serif;
}

`;
export default GlobalStyle;
