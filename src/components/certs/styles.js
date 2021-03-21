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
    @media (max-width: 950px) {
        display: inline-flex;
        flex-direction: column;
    }
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
            height: 105%;
            background-color: ${props => props.theme.colors.teal};
            display: block;
            position: absolute;
            top: 1.4rem;
            left: .35rem;
            
        }
    }
`;
export const Explist = styled.ul`
  list-style: none;
  margin-top: 3rem;
  columns: 2;
  @media (max-width: 950px) {
    columns: 1;
    display: grid;
    grid-template-columns: max-content;
    justify-content: center;
  }
  
`;
export const ExpDetails = styled(Text)`
    font-size: .9rem;
    color: ${props => props.theme.colors.black || 'gray'};
    opacity: 0.75;
`;
