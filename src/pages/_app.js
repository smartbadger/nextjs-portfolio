import { ThemeProvider } from "styled-components";
import { LanguageProvider } from "context/language";
import { ModalProvider } from "context/modal";
import Normalize from "atoms/normalize";
import theme from "atoms/theme";
import { AppContainer } from "atoms/ui/layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppContainer>
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <Normalize />
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </ThemeProvider>
      </LanguageProvider>
    </AppContainer>
  );
};

export default MyApp;
