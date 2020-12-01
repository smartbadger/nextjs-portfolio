import { Heading, Image, Flex, Box, Button, Text, BackgroundGradient } from "atoms/ui/elements";
const Hero = ({ title, subtitle, message, contact, image }) => {
  return (
    <>
      <Flex mx={-2}>
        <Box width={1/2} px={2}>
          <Heading bg='dark' as="h1" style={{textAlign: 'left'}}>{title}</Heading>
          <BackgroundGradient startColor="green" endColor="transparent" style={{marginBottom: '15px'}}>
            <Text bg='dark'>{subtitle}</Text>
          </BackgroundGradient>
          <Text mb={'15px'} bg='dark'>{message}</Text>
          <Button mb={'15px'} primary>{contact}</Button>
        </Box>
        <Box width={1/3} px={2} >
          <Image src={image} />
        </Box>
      </Flex>
    </>
  );
};

export default Hero;
