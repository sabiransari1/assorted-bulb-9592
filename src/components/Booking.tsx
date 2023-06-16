import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import { useEffect, useState } from "react";
import { Places } from "../utils/types";
import { SinglePlace } from "./SinglePlace";

export const Booking = () => {
  const { id } = useParams();
  const data = useAppSelector((store) => store.placesReducer.data);

  const [bookingProduct, setBookingProduct] = useState<Places>({});

  useEffect(() => {
    const xBookingProduct: Places = data.find((el) => el.id === Number(id));
    setBookingProduct(xBookingProduct);
  }, []);

  return (
    <Box>
      <SinglePlace {...bookingProduct} />
    </Box>
  );
};
