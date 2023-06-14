import { Box } from "@chakra-ui/react";
import { PlacesList } from "../components/PlacesList";
import { ImageSlider } from "../components/ImageSlider";

export const Home = () => {
  return (
    <Box>
      <ImageSlider />
      <PlacesList str1={"Popular Destinations"} str2={"for new"} />
    </Box>
  );
};
