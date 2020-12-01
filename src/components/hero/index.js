import { Heading, Image, Flex, Box, Button, Text, BackgroundGradient } from "atoms/ui/elements";
const Hero = ({ title, subtitle, message, contact, image }) => {
  return (
    <>
      <Flex>
        <Box>
          <Heading as="h1" style={{textAlign: 'left'}}>{title}</Heading>
          <BackgroundGradient startColor="green" endColor="transparent">
            <Text>{subtitle}</Text>
          </BackgroundGradient>
          <Text>{message}</Text>
          <Button primary>{contact}</Button>
        </Box>
        <Box>
          <Image src={image} />
        </Box>
      </Flex>
    </>
  );
};

export default Hero;
