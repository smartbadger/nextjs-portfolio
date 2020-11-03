import ContentSection from "components/content-section";
import { Heading, Image, Flex, Box, Button, Text } from "atoms/ui/elements";
const Hero = ({ title, subtitle, message, contact, image }) => {
  return (
    <ContentSection background="darkBlue">
      <Flex>
        <Box>
          <Heading as="h1" style={{textAlign: 'left'}}>{title}</Heading>
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
