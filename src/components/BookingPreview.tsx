import { Box, Button, Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react";
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
      <Box minW={"40%"} maxW={"40%"} margin={"auto"}>
        <TableContainer>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td>Location</Td>
                <Td>
                  {city}, {country}
                </Td>
              </Tr>

              <Tr>
                <Td>Residency Type</Td>
                <Td>{type}</Td>
              </Tr>

              <Tr>
                <Td>Check in date</Td>
                <Td>{checkin}</Td>
              </Tr>

              <Tr>
                <Td>Check out date</Td>
                <Td>{checkout}</Td>
              </Tr>

              <Tr>
                <Td>Adults</Td>
                <Td>{adults}</Td>
              </Tr>

              <Tr>
                <Td>Children</Td>
                <Td>{children}</Td>
              </Tr>

              <Tr>
                <Td>Infants</Td>
                <Td>{infants}</Td>
              </Tr>

              <Tr>
                <Td>Booking Rooms</Td>
                <Td>{rooms}</Td>
              </Tr>

              <Tr>
                <Td>Price</Td>
                <Td>₹ {price}</Td>
              </Tr>

              <Tr>
                <Td>Total Amount</Td>
                <Td>₹ {rooms * price}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Link to={"https://book.stripe.com/test_9AQ01qfxybuh5mE5kl"}>
          <Button w={"100%"} bgColor={"#f1095d"} color={"#fff"} borderRadius={"0px 0px 5px 5px"}>
            Confirm Reservation
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
