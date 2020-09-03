import { ThemeProvider } from 'styled-components'
import { LanguageProvider } from 'context/language'
import Normalize from 'atoms/normalize'
import theme from 'atoms/theme'

const MyApp = ({ Component, pageProps }) => {
    return (
        <LanguageProvider>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
                <Normalize />
            </ThemeProvider>
        </LanguageProvider>
    )
}
  
export default MyApp