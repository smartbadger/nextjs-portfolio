import styled, {keyframes} from "styled-components";
import LazyLoad from "react-lazyload";

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

const ImgWithFallback = ({ srcSet, fallback, ...delegated }) => {
  return (
    <picture>
      {srcSet.map(({src, type}) => <source key={src} srcSet={src} type={type} />)}
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
  const refPlaceholder = React.useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <ImageWrapper>
      <Placeholder ref={refPlaceholder} />
      <LazyLoad>
        <StyledImage
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          srcSet={srcSet}
          fallback={fallback}
          alt={alt}
        />
      </LazyLoad>
    </ImageWrapper>
  );
};

export default LazyImage;
