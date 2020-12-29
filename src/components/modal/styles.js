import styled from 'styled-components'

export const ModalWrapper = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
`

export const ModalContainer = styled.div`
    background: white;
`

export const ModalRootEl = styled.div`
    position: relative;
    overflow: visible;
    width: 100%;
    z-index: 1;
`

