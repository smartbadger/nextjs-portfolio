import styled from 'styled-components';

export const SkillItem = styled.div``

export const ContainerStyles = styled.div`
    height: 20;
    width: '100%';
    background-color: ${props => props.theme.colors.lightGray};
    border-radius: 50;
    margin: 50;
`

export const FillerStyles = styled.div`
    height: '100%';
    width: ${props => props.value}%;
    background-color: ${props => props.fillColor};
    border-radius: 'inherit';
`