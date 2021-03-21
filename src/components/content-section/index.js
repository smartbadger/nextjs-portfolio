import { Wrapper, Container, Background } from "./styles";

const ContentSection = ({ children, background, height }) => {
  return (
    <Wrapper height={height}>
      {background ? <Background color={background} /> : null}
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default ContentSection;
