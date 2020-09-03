import { Wrapper, Container } from "./styles";

const ContentSection = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default ContentSection;
