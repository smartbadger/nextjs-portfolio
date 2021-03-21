import styled, { css } from 'styled-components';
export const PageWrapperStyles = css`
    width: 80%;
    margin: auto;
    max-width: 1200px;
`
export const PageWrapper = styled.div`
    ${PageWrapperStyles}
`
export const ScrollSnapWrapper = styled.div`
    height: 100vh;
    overflow: auto;
`
export const AppContainer = styled.div`
    overflow: hidden;
    width: 100%;
`