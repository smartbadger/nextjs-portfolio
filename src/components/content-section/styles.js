import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
`;
export const Container = styled.div`
  position: relative;
  margin: 2rem 0;
  z-index: 10;

`;
export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  background-color: ${(props) =>
    props.theme.colors[props.color] || props.color};
  top: 0;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;
