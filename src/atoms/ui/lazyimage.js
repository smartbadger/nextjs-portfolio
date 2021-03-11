import styled, { keyframes } from "styled-components";
import LazyLoad from "react-lazyload";
import {useState, useRef} from 'react';

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
`;

const loadingAnimation = keyframes`
      0% {
        background-color: #fff;
      }
      50% {
        background-color: #ccc;
      }
      100% {
        background-color: #fff;
      }
    `;

const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${loadingAnimation} 1s infinite;
`;

const MissingImage = styled.div`
  display: ${(props) => (props.broken ? "block" : "none")};
  width: 100%;
  background-color: rgb(240, 240, 240);
  border: 2px dotted rgb(200, 200, 200);
  height: 90%;
  top: 0;
  left: 0;
  z-index: 1;
  position: absolute;
  
  &::after {
    content: "Broken image of ${props => props.alt || "something..."}";
    font-size: 12px;
    color: rgb(100, 100, 100);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    padding: 5x;
    height: 100%;
  }
`;
const ImgWithFallback = ({ srcSet, fallback, ...delegated }) => {
  return (
    <picture>
      {srcSet && srcSet.length ? srcSet.map(({ src, type }) => (
        <source key={src} srcSet={src} type={type} />
      )): null}
      <img src={fallback} {...delegated} />
    </picture>
  );
};

const StyledImage = styled(ImgWithFallback)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const LazyImage = ({ srcSet, fallback, alt }) => {
  const [broken, setBroken] = useState(false)
  const refPlaceholder = useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };
  const addBrokenImage = () => {
    removePlaceholder()
    setBroken(true)
  };

  return (
    <ImageWrapper>
      <Placeholder ref={refPlaceholder} />
      <MissingImage broken={broken} alt={alt}/>
      <LazyLoad once scroll throttle={100}>
        <StyledImage
          onLoad={removePlaceholder}
          onError={addBrokenImage}
          srcSet={srcSet}
          fallback={fallback}
          alt={alt}
        />
      </LazyLoad>
    </ImageWrapper>
  );
};

export default LazyImage;
