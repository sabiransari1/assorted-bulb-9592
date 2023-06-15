import { Box, Flex, Text, Grid, Center } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { getHomePage } from "../redux/places/action";
import { HomeCard } from "./HomeCard";

interface HomeListProp {
  str1: string;
  str2: string;
}

export const HomeList = ({ str1, str2 }: HomeListProp) => {
  const home = useAppSelector((store) => store.placesReducer.home);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHomePage());
  }, []);

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
            fontWeight={"hairline"}
            color={"#567eb9"}
          >
            {str2}
          </Text>
        </Flex>
      </Center>

      {/* second */}
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
          xl: "repeat(4,1fr)",
          "2xl": "repeat(5,1fr)",
        }}
        gap={"1rem"}
      >
        {home?.map((el) => (
          <HomeCard key={el.id} {...el} />
        ))}
      </Grid>
    </Box>
  );
};
