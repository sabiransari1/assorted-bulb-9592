import { Box, Flex, Text, Grid, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { getPlaces } from "../redux/places/action";
import { PlacesCard } from "./PlacesCard";
import Pagination from "./Pagination";
import { PlacesFunctionality } from "./PlacesFunctionality";

interface PlacesListProp {
  str1: string;
  str2: string;
}

export const PlacesList = ({ str1, str2 }: PlacesListProp) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((store) => store.placesReducer.data);
  const [activePage, setActivePage] = useState<number>(1);
  const [limit] = useState<number>(12);
  const [query, setQuery] = useState<string>("");

  const handlePageChange = (newPageNumber: number): void => {
    setActivePage(newPageNumber);
  };

  const queryParams = {
    params: {
      _page: activePage,
      _limit: limit,
      q: query && query,
    },
  };

  // let id: number = 0;

  useEffect(() => {
    // if (id) {
    //   clearTimeout(id);
    // }
    // id = setTimeout(() => {
    //   dispatch(getPlaces(queryParams));
    // }, 2000);
    dispatch(getPlaces(queryParams));
  }, [activePage, query]);

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

      <PlacesFunctionality query={query} setQuery={setQuery} />

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
        {data?.map((el) => (
          <PlacesCard key={el.id} {...el} />
        ))}
      </Grid>

      <Flex justifyContent="center" p={6}>
        <Pagination
          placesLength={data?.length}
          perPage={2}
          activePage={activePage}
          handlePageChange={handlePageChange}
        />
      </Flex>
    </Box>
  );
};
