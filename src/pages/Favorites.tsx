import { useAppSelector } from "../redux/store";
import { Box, Grid, Heading } from "@chakra-ui/react";
import { FavoritesPlaces } from "../components/FavoritesPlaces";
import { Places } from "../utils/types";

export const Favorites = () => {
  const fav = useAppSelector((store) => store.FavoritesReducer.fav);

  return (
    <Box
      minH={"100vh"}
      p={{
        base: "1rem 1rem",
        sm: "1rem 1rem",
        md: "2rem 2rem",
        lg: "2rem 5rem",
        xl: "2rem 5rem",
        "2xl": "2rem 5rem",
      }}
    >
      {fav.length === 0 ? (
        <Heading textAlign={"center"}>You don't have any favourite</Heading>
      ) : (
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
            xl: "repeat(4,1fr)",
            "2xl": "repeat(5,1fr)",
          }}
          gap={"1rem"}
        >
          {fav?.map((el: Places) => {
            return <FavoritesPlaces key={el.id} {...el} />;
          })}
        </Grid>
      )}
    </Box>
  );
};
