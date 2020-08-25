import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import theme from 'atoms/theme'

const MyApp = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <Normalize />
        </ThemeProvider>
    )
}
  
export default MyApp