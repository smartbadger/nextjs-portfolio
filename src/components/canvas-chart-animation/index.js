import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import CM from "./helpers";
const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`
class Canvas extends React.Component {

  constructor(props) {
    super(props);
    this.canvasManager = CM
  }
  componentDidMount() {
    this.canvasManager.init()
  }

  render() {
    return (
      <Wrapper>
        <canvas
          id="canvas"
        />
      </Wrapper>
    );
  }
}
export default Canvas