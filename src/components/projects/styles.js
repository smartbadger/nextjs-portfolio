import styled from 'styled-components';
import { Text, Card, Grid} from "atoms/ui/elements";
export const Title = styled(Text)`
    color: white;
    font-size: 1rem;
`
export const SubTitle = styled(Text)`
    color: white;
    font-size: .75rem;
`
export const Details = styled(Text)``
export const Link  = styled(Text)``
export const ImageBackground  = styled.div`
    width: 100%;
    z-index: 1;
`
export const DetailsContainer  = styled.div`
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background: rgba(0,0,0,0.5);
`
export const CardItem  = styled(Card)`
    position: relative; 
    overflow: hidden;
    padding: 0;
    z-index: 1;

`
export const CardGrid = styled(Grid)`
    grid-template-columns: repeat(auto-fit,minmax(15rem,1fr));
`