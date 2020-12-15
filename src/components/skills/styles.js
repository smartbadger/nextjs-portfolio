import styled, { css } from "styled-components";
import { Text, Box, Grid } from "atoms/ui/elements";

export const SkillItem = styled.div`
  display: none;
`;

export const SkillTab = styled.li`
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) =>
    props.active ? props.theme.colors.blue : props.theme.colors.black};
  border-bottom: 2px solid
    ${(props) =>
      props.active ? props.theme.colors.blue : props.theme.colors.disabled};
  padding: 0 1rem;
  text-align: center;
  cursor: pointer;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  transition: 0.25s opacity ease-in-out;
  &:hover,
  &:focus,
  &focus-within {
    opacity: ${(props) => (props.active ? 1 : 0.75)};
  }
`;

export const ContainerStyles = styled.div`
  height: 0.8rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.statusGray};
  border-radius: 50px;
  overflow: hidden;
`;

export const FillerStyles = styled.div`
  height: 100%;
  width: ${(props) => props.value * 100}%;
  background-color: ${(props) => props.theme.colors.statusGreen || "green"};
  border-radius: "inherit";
  border-radius: 50px;
`;

export const SkillText = styled(Text)`
  color: ${(props) => props.theme.colors.blue || "blue"};
  text-transform: uppercase;
  font-size: 0.6rem;
  margin-top: 0.5rem;
`;
export const SkillName = styled(Text)`
  font-weight: bold;
  letter-spacing: 1px;
`;
export const SkillTabsContainer = styled.ul`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  list-style: none;
  padding: 0;
`;



export const SkillsGrid = styled(Grid)`
  ${(props) => {
    let activeStyles = ``;
    props.catagories.forEach(cat => {
        activeStyles += `
          &[data-active-catagory="${cat}"] > ${SkillItem}[data-catagory="${cat}"] {
            display: block;
          }`
      });
    return activeStyles
  }}
`;
