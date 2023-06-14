import { Text, Grid, Image, useColorMode, Icon, Box, Flex } from "@chakra-ui/react";
import { Home } from "../utils/types";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

export const PlacesCard = ({ id, img, city, country, price, rating }: Home) => {
  const { colorMode } = useColorMode();

  return (
    <Grid borderRadius="5px" w={"100%"}>
      {/* first */}
      <Image
        src={img}
        alt={city}
        w={"100%"}
        minH={"200px"}
        maxH={"200px"}
        borderRadius="5px"
        cursor={"pointer"}
        transition="transform .5s"
        _hover={{
          cursor: "pointer",
          transform: "scale(0.9)",
        }}
      />
      {/* <Box w="100%" py={"100"} bgImage={img} bgRepeat="no-repeat" objectFit={"fill"}>
        <Icon aria-label="rating" as={BsFillSuitHeartFill} color={"#f1095d"} />
      </Box> */}

      {/* second */}
      <Flex justify={"space-between"} mt={".3rem"}>
        <Text fontWeight={"semibold"} color={colorMode === "light" ? "black" : "white"}>
          {city}, {country}
        </Text>

        <Box>
          <Icon aria-label="rating" as={AiFillStar} color={"#567eb9"} /> {rating}
        </Box>
      </Flex>

      {/* third */}
      <Text
        color={"#788097"}
        fontSize={{
          base: "1xl",
          sm: "1xl",
          md: "1xl",
          lg: "1xl",
          xl: "1xl",
          "2xl": "2xl",
        }}
      >
        {}
      </Text>

      {/* forth */}
      <Text>₹ {price}</Text>
    </Grid>
  );
};
