import { Wrapper, Container, Background } from "./styles";

const ContentSection = ({ children, background }) => {
  return (
    <Wrapper>
      {background ? <Background color={background} /> : null}
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default ContentSection;
