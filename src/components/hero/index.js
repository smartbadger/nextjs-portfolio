import {
  Heading,
  Flex,
  Box,
  Text,
  BackgroundGradient,
} from "atoms/ui/elements";

const Hero = ({ title, subtitle, message, contact, image }) => {
  return (
    <>
      <Flex style={{position: 'relative', zIndex: 5}} mx={-2}>
        <Box width={[300, 500]} px={2} style={{padding: "1rem", backgroundColor: "rgba(0,0,0,0.8)"}}>
          <Heading bg="dark" as="h1" style={{ textAlign: "left" }}>
            {title}
          </Heading>
          <BackgroundGradient
            startColor="green"
            endColor="transparent"
            style={{ marginBottom: "15px" }}
          >
            <Text bg="dark">{subtitle}</Text>
          </BackgroundGradient>
          <Text mb={"15px"} bg="dark">
            {message}
          </Text>
          {/* <Button mb={'15px'} primary>{contact}</Button> */}
        </Box>
      </Flex>
    </>
  );
};

export default Hero;
