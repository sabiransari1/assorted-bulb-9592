import { Button, Flex, Heading } from "@chakra-ui/react";

interface IPaginationProps {
  placesLength: number;
  perPage: number;
  activePage: number;
  handlePageChange: (page: number) => void;
}

const Pagination = ({ placesLength, perPage, activePage, handlePageChange }: IPaginationProps) => {
  const totalPages = Math.ceil(placesLength / perPage);
  return (
    <Flex gap={3}>
      {/* {Prev Button} */}
      {placesLength ? (
        <Button
          color={"black"}
          bg={"#daeff0"}
          isDisabled={activePage === 1}
          onClick={() => handlePageChange(activePage - 1)}
        >
          Prev
        </Button>
      ) : (
        <Heading>No result found, Please try again...</Heading>
      )}

      {/* {....} */}
      {activePage > 2 && "..."}

      {Array(totalPages)
        .fill("")
        .map((_, index) => {
          return (
            <Button
              color={"black"}
              bgColor={activePage === index + 1 ? "#f1095d" : "#daeff0"}
              onClick={() => handlePageChange(index + 1)}
              key={index}
            >
              {index + 1}
            </Button>
          );
        })
        .filter((_, index) => {
          if (index < activePage + 2 && index > activePage - 2) return true;

          return false;
        })}

      {/* {....} */}
      {activePage < totalPages - 2 && "..."}

      {placesLength ? (
        <Button
          color={"black"}
          bg={"#daeff0"}
          isDisabled={activePage === totalPages}
          onClick={() => handlePageChange(activePage + 1)}
        >
          Next
        </Button>
      ) : (
        ""
      )}
    </Flex>
  );
};

export default Pagination;
