import { Box, Flex, Text, Center, Image, Button } from "@chakra-ui/react";
import eleven from "../assets/images/11.jpg";
import twelve from "../assets/images/12.jpg";
import thirteen from "../assets/images/13.jpg";
import { Link } from "react-router-dom";

const seeMore = [
  { img: eleven, quote: "Great for groups on your trip" },
  { img: twelve, quote: "Most popular around the world" },
  { img: thirteen, quote: "Enjoy the nature with family" },
];

interface SeeMoreProp {
  str1: string;
  str2: string;
  str3: string;
}

export const SeeMore = ({ str1, str2, str3 }: SeeMoreProp) => {
  return (
    <Box
      p={{
        base: "1rem 1rem",
        sm: "1rem 1rem",
        md: "1rem 2rem",
        lg: "2rem 5rem",
        xl: "2rem 5rem",
        "2xl": "3rem 5rem",
      }}
    >
      {/* first */}
      <Center mb={"2rem"}>
        <Flex>
          <Text
            fontSize={{
              base: "3xl",
              sm: "3xl",
              md: "4xl",
              lg: "4xl",
              xl: "4xl",
              "2xl": "4xl",
            }}
            fontFamily={"cursive"}
            fontWeight={"bold"}
            mr={".6rem"}
            color={"#f1095d"}
          >
            {str1}
          </Text>

          <Text
            fontSize={{
              base: "3xl",
              sm: "3xl",
              md: "4xl",
              lg: "4xl",
              xl: "4xl",
              "2xl": "4xl",
            }}
            mr={".6rem"}
            fontWeight={"hairline"}
            color={"#567eb9"}
          >
            {str2}
          </Text>

          <Text
            fontSize={{
              base: "3xl",
              sm: "3xl",
              md: "4xl",
              lg: "4xl",
              xl: "4xl",
              "2xl": "4xl",
            }}
            fontFamily={"cursive"}
            fontWeight={"bold"}
            mr={".6rem"}
            color={"#f1095d"}
          >
            {str3}
          </Text>
        </Flex>
      </Center>

      {/* second */}
      <Flex justify={"space-between"}>
        {seeMore?.map((el, index) => (
          <Box w={"30%"} pos={"relative"} key={index}>
            <Box
              w={"40%"}
              pos={"absolute"}
              bg={"#567eb9"}
              opacity={".6"}
              borderRadius={"5px 0 0 5px"}
              textAlign={"center"}
              left={"60%"}
              top={"20px"}
              p={".2rem"}
              color={"white"}
            >
              {el.quote}
            </Box>

            <Image src={el.img} alt={`See more`} borderRadius={"5px"} w={"100%"} />

            <Link to={"/places"}>
              <Button
                bgColor={"#f1095d"}
                mt={".5rem"}
                pos={"absolute"}
                bottom={"20px"}
                left={"20px"}
                opacity={".6"}
                color={"white"}
              >
                See More
              </Button>
            </Link>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
