import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface BookingPreviewProps {
  checkin: string;
  checkout: string;
  adults: number;
  children: number;
  infants: number;
  rooms: number;
  city: string;
  country: string;
  type: string;
  price: number;
}

export const BookingPreview = () => {
  const [bookingPreviewItems, setBookingPreviewItems] = useState<BookingPreviewProps>({});
  const {
    checkin,
    checkout,
    adults,
    children,
    infants,
    rooms,
    city,
    country,
    type,
    price,
  }: BookingPreviewProps = bookingPreviewItems;

  useEffect(() => {
    const item = localStorage.getItem("BookingPreview");

    item && setBookingPreviewItems(JSON.parse(item));
  }, []);

  return (
    <Box minH={"100vh"} padding={"5rem 5rem"}>
      <Box maxW={"50%"} minW={"50%"} margin={"auto"}>
        <Flex justify={"space-between"}>
          <Box>
            <Text mb={"1rem"} fontSize={"2xl"}>
              Location :-
            </Text>

            <Text mb={"1rem"} fontSize={"2xl"}>
              Room Type :-
            </Text>

            <Text mb={"1rem"} fontSize={"2xl"}>
              Check in date :-
            </Text>

            <Text mb={"1rem"} fontSize={"2xl"}>
              Check out date :-
            </Text>

            <Text mb={"1rem"} fontSize={"2xl"}>
              Adults :-
            </Text>

            <Text mb={"1rem"} fontSize={"2xl"}>
              Children :-
            </Text>

            <Text mb={"1rem"} fontSize={"2xl"}>
              Infants :-
            </Text>

            <Text mb={"1rem"} fontSize={"2xl"}>
              Booking Rooms :-
            </Text>

            <Text mb={"1rem"} fontSize={"2xl"}>
              Price :-
            </Text>

            <Text mb={"1rem"} fontSize={"2xl"}>
              Total Amount :-
            </Text>
          </Box>

          <Box>
            <Text mb={"1rem"} fontSize={"2xl"}>
              {city}, {country}
            </Text>

            <Text mb={"1rem"} fontSize={"2xl"}>
              {type}
            </Text>

            <Text mb={"1rem"} fontSize={"2xl"}>
              {checkin}
            </Text>

            <Text mb={"1rem"} fontSize={"2xl"}>
              {checkout}
            </Text>

            <Text mb={"1rem"} fontSize={"2xl"}>
              {adults}
            </Text>

            <Text mb={"1rem"} fontSize={"2xl"}>
              {children}
            </Text>

            <Text mb={"1rem"} fontSize={"2xl"}>
              {infants}
            </Text>

            <Text mb={"1rem"} fontSize={"2xl"}>
              {rooms}
            </Text>

            <Text mb={"1rem"} fontSize={"2xl"}>
              ₹ {price}
            </Text>

            <Text mb={"1rem"} fontSize={"2xl"}>
              ₹ {rooms * price}
            </Text>
          </Box>
        </Flex>

        <Link to={"https://book.stripe.com/test_9AQ01qfxybuh5mE5kl"}>
          <Button w={"100%"} bgColor={"#f1095d"} color={"#fff"}>
            Confirm Reservation
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
