import React from "react";
import { useAppSelector } from "../redux/store";
import { Box, Grid } from "@chakra-ui/react";
import { FavPlaces } from "../components/FavPlaces";
import { Places } from "../utils/types";

export const Fav = () => {
  const fav = useAppSelector((store) => store.favReducer.fav);
  return (
    <Box
      // mr={"10px"}
      p={{
        base: "1rem 1rem",
        sm: "1rem 1rem",
        md: "2rem 2rem",
        lg: "2rem 5rem",
        xl: "2rem 5rem",
        "2xl": "2rem 5rem",
      }}
      //   overflowY={"scroll"}
      //   className="fav-list-container"
    >
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
          return <FavPlaces key={el.id} {...el} />;
        })}
      </Grid>
    </Box>
  );
};
