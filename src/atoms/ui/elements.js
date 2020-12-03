import styled from 'styled-components'

import { Box as Bx, Flex as F, Text as T, Heading as H, Button as Bttn, Link as Lnk, Image as Img, Card as Cd } from "rebass/styled-components";
export const Box = styled(Bx)``
export const Flex = styled(F)``
export const Text = styled(T)`
    line-height: 1.5;
    color: ${ props => props.bg === 'dark' ? props.theme.text.colors['dark'] : props.theme.text.colors['light']};
`
export const Heading = styled(H)`
    text-align: center;
    
    color: ${ props => props.bg === 'dark' ? props.theme.text.colors['dark'] : props.theme.text.colors['light']};
`
export const Button = styled(Bttn)``
export const Link = styled(Lnk)``
export const Image = styled(Img)``
export const Card = styled(Cd )``

export const BackgroundGradient = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    flex: 0;
    background: linear-gradient(${props => props.deg || '45'}deg, ${props => props.theme.colors[props.startColor] || props.startColor}, ${props => props.theme.colors[props.endColor] || props.endColor});
`