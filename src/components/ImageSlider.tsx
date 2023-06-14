import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import one from "../assets/images/1.jpg";
import two from "../assets/images/2.jpg";
import three from "../assets/images/3.jpg";
import four from "../assets/images/4.jpg";
import five from "../assets/images/5.jpg";
import six from "../assets/images/6.jpg";
import seven from "../assets/images/7.jpg";
import eight from "../assets/images/8.jpg";
import nine from "../assets/images/9.jpg";
import ten from "../assets/images/10.jpg";

import { Center, Box, Image } from "@chakra-ui/react";

export const ImageSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    cssEase: "linear",
  };

  return (
    <Center
      p={{
        base: "1rem 1rem",
        sm: "1rem 1rem",
        md: "1rem 2rem",
        lg: "2rem 5rem",
        xl: "2rem 5rem",
        "2xl": "3rem 5rem",
      }}
    >
      <Box w={"80%"} cursor={"pointer"} borderRadius={"10px"}>
        <Slider {...settings}>
          <Box>
            <Image src={one} alt="Image 1" borderRadius={"10px"} />
          </Box>
          <Box>
            <Image src={two} alt="Image 2" borderRadius={"10px"} />
          </Box>
          <Box>
            <Image src={three} alt="Image 3" borderRadius={"10px"} />
          </Box>
          <Box>
            <Image src={four} alt="Image 4" borderRadius={"10px"} />
          </Box>
          <Box>
            <Image src={five} alt="Image 5" borderRadius={"10px"} />
          </Box>
          <Box>
            <Image src={six} alt="Image 6" borderRadius={"10px"} />
          </Box>
          <Box>
            <Image src={seven} alt="Image 7" borderRadius={"10px"} />
          </Box>
          <Box>
            <Image src={eight} alt="Image 8" borderRadius={"10px"} />
          </Box>
          <Box>
            <Image src={nine} alt="Image 9" borderRadius={"10px"} />
          </Box>
          <Box>
            <Image src={ten} alt="Image 10" borderRadius={"10px"} />
          </Box>
        </Slider>
      </Box>
    </Center>
  );
};
