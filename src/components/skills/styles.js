import styled from "styled-components";
import { Text } from "atoms/ui/elements";

export const SkillItem = styled.div``;

export const SkillTab = styled(Text)`
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
`;

export const ContainerStyles = styled.div`
  height: .8rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.statusGray};
  border-radius: 50px;
  overflow: hidden;
  
`;

export const FillerStyles = styled.div`
  height: 100%;
  width: ${(props) => props.value * 100}%;
  background-color: ${(props) => props.theme.colors.statusGreen || 'green'};
  border-radius: "inherit";
  border-radius: 50px;
`;

export const SkillText = styled(Text)`
    color: ${(props) => props.theme.colors.blue || 'blue'};
    text-transform: uppercase;
    font-size: .6rem;
    margin-top: .5rem;
`
export const SkillName = styled(Text)`
    font-weight: bold;
    letter-spacing: 1px;
`