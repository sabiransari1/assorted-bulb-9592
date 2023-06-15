import { Text, Grid, Image, useColorMode, Icon, Box, Flex } from "@chakra-ui/react";
import { Home } from "../utils/types";
import { AiFillStar } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";

export const HomeCard = ({ id, img, city, country, price, rating }: Home) => {
  const { colorMode } = useColorMode();

  return (
    <Grid borderRadius="5px" w={"100%"} pos={"relative"}>
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

      {/* second */}
      <Box pos={"absolute"} left={"87%"} top={"5%"}>
        <Icon aria-label="favorite" as={BsFillSuitHeartFill} color={"#f1095d"} />
      </Box>

      {/* third */}
      <Flex justify={"space-between"} mt={".3rem"}>
        <Text fontWeight={"semibold"} color={colorMode === "light" ? "black" : "white"}>
          {city}, {country}
        </Text>

        {/* forth */}
        <Box>
          <Icon aria-label="rating" as={AiFillStar} color={"#567eb9"} /> {rating}
        </Box>
      </Flex>

      {/* fifth */}
      <Text>₹ {price}</Text>
    </Grid>
  );
};
