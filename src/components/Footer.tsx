import { Box, Flex, Image, ListItem, Text, UnorderedList, useColorMode } from "@chakra-ui/react";
import googlePlay from "../assets/images/googlePlay.png";
import appleApp from "../assets/images/appleApp.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";

export const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      p={{
        base: "1rem 1rem",
        sm: "1rem 1rem",
        md: "1rem 2rem",
        lg: "2rem 5rem",
        xl: "2rem 5rem",
        "2xl": "3rem 5rem",
      }}
      justify={"space-between"}
      bgColor={colorMode === "light" ? "#bcc8dd" : "#000"}
      borderTop={colorMode === "light" ? "" : "2px double white"}
      // boxShadow={
      //   "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
      // }
    >
      {/* first */}
      <Box>
        <Text color={"#567eb9"} fontWeight={"bold"}>
          Support
        </Text>
        <UnorderedList>
          <ListItem>Help Center</ListItem>
          <ListItem>Safety information</ListItem>
          <ListItem>Cancellation options</ListItem>
          <ListItem>Our COVID-19 Response</ListItem>
          <ListItem>Supporting people with disabilities</ListItem>
          <ListItem>Report a neighborthood concern</ListItem>
        </UnorderedList>
      </Box>

      {/* second */}
      <Box>
        <Text color={"#567eb9"} fontWeight={"bold"}>
          Community
        </Text>
        <UnorderedList>
          <ListItem>Disaster relief housing</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>Cellebrating diversity & belonging</ListItem>
          <ListItem>Combating discrimination</ListItem>
        </UnorderedList>
      </Box>

      {/* third */}
      <Box>
        <Text color={"#567eb9"} fontWeight={"bold"}>
          Housing
        </Text>
        <UnorderedList>
          <ListItem>Try housing</ListItem>
          <ListItem>Protection for Homeowner</ListItem>
          <ListItem>Explore housing resources</ListItem>
          <ListItem>Visit our community forum</ListItem>
          <ListItem>How to homeowner responsiblty</ListItem>
        </UnorderedList>
      </Box>

      {/* fourth */}
      <Box>
        <Text color={"#567eb9"} fontWeight={"bold"}>
          About
        </Text>
        <UnorderedList>
          <ListItem>Newsroom</ListItem>
          <ListItem>Learn new features</ListItem>
          <ListItem>Letter to foundres</ListItem>
          <ListItem>Careers</ListItem>
          <ListItem>Investors</ListItem>
        </UnorderedList>
      </Box>

      {/* fifth */}
      <Flex
        w={"20%"}
        direction={"column"}
        // justify={"space-between"}
        gap={".5rem"}
        p={"1rem 0 1rem 1rem"}
      >
        <Image src={googlePlay} borderRadius={"5px"} />
        <Image src={appleApp} borderRadius={"5px"} />

        <Flex w={"25%"}>
          <Image src={linkedin} />
          <Image src={twitter} />
          <Image src={facebook} />
          <Image src={instagram} />
        </Flex>
      </Flex>
    </Flex>
  );
};
