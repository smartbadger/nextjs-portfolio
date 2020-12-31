import styled, { css } from 'styled-components';
export const PageWrapperStyles = css`
    width: 80%;
    margin: auto;
    max-width: 1200px;
    margin: auto;
`
export const PageWrapper = styled.div`
    ${PageWrapperStyles}
`
export const ScrollSnapWrapper = styled.div`
    height: 100vh;
    overflow: scroll;
`