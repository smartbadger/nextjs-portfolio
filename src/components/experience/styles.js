import styled from "styled-components";
import { Text } from "atoms/ui/elements";

export const ExpTitle = styled(Text)`
    font-weight: bold;
    font-size: 1.2rem;
    letter-spacing: 1px;
    line-height: 1.5;
    margin-bottom: .5rem;
`;
export const Explink = styled.li`
    margin-bottom: 1rem;
    position: relative;
    padding-left: 2.5rem;
    &::before {
        content: "";
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.teal};
        display: block;
        position: absolute;
        top: .5rem;
        left: 0;

    }
    &:not(:last-child){
        &::after {
            content: "";
            width: .25rem;
            height: 100%;
            background-color: ${props => props.theme.colors.teal};
            display: block;
            position: absolute;
            top: 1.5rem;
            left: .35rem;
            
        }
    }
`;
export const Explist = styled.ul`
  list-style: none;
`;
export const ExpDetails = styled(Text)`
    font-size: .9rem;
    color: ${props => props.theme.colors.textGray || 'gray'};
`;
