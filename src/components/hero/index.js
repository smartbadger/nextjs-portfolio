import ContentSection from "components/content-section";
import { Heading, Image, Flex, Box, Button, Text } from "rebass";
const Hero = ({ title, subtitle, message, contact, image }) => {
  return (
    <ContentSection>
      <Flex>
        <Box>
          <Heading as="h1">{title}</Heading>
          <Text>{subtitle}</Text>
          <Text>{message}</Text>
          <Button primary>{contact}</Button>
        </Box>
        <Box>
          <Image src={image} />
        </Box>
      </Flex>
    </ContentSection>
  );
};

export default Hero;
