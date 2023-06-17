import { useState, useEffect } from "react";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  IconButton,
  InputRightElement,
  Flex,
  Select,
} from "@chakra-ui/react";
import { MdSearch, MdCancel } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

interface PlacesFunctionalityProps {
  query: string;
  setQuery: (query: string) => void;
}

export const PlacesFunctionality = ({ query, setQuery }: PlacesFunctionalityProps) => {
  const [_, setSearchParams] = useSearchParams();
  const [residency, setResidency] = useState<string>("");
  const [order, setOrder] = useState<string>("");

  const handleResidency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setResidency(value);
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setOrder(value);
  };

  const queryParams: any = new Object();
  residency && (queryParams.residency = residency);
  order && (queryParams.order = order);

  useEffect(() => {
    setSearchParams(queryParams);
  }, [residency, order]);

  return (
    <Box p={"2rem 0"}>
      {/* search bar */}
      <Box w={"50%"} margin={"auto"}>
        <InputGroup>
          <InputLeftElement>
            <IconButton aria-label={"search"} icon={<MdSearch />} cursor={"default"} />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search your destination..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            variant="filled"
            border={"none"}
            pl={"50px"}
          />
          <InputRightElement>
            <IconButton
              aria-label={"search"}
              icon={<MdCancel />}
              onClick={() => setQuery("")}
              opacity={query ? "inherit" : "0"}
              cursor={query ? "pointer" : "default"}
              bg={"transparent"}
            />
          </InputRightElement>
        </InputGroup>
      </Box>

      {/* filter & sorting */}
      {/* filter by residency */}
      <Flex justify={"space-evenly"} p={"2rem 0"}>
        <Box>
          <Select
            onChange={handleResidency}
            variant="filled"
            placeholder="Choose your residency preferences"
            border={"none"}
            cursor={"pointer"}
          >
            {/* <option value={""}>Choose your residency preferences</option> */}
            <option value={"flat"}>Flat</option>
            <option value={"room"}>Room</option>
            <option value={"villa"}>Villa</option>
            <option value={"hotel"}>Hotel</option>
            <option value={"cottage"}>Cottage</option>
            <option value={"suiteRoom"}>Suite Room</option>
            <option value={"penthouse"}>Pent House</option>
            <option value={"guesthouse"}>Guest House</option>
            <option value={"studioapartment"}>Studio Apartment</option>
          </Select>
        </Box>

        {/* sort by order */}
        <Box>
          <Select
            onChange={handleSort}
            placeholder="Choose your budget preferences"
            variant="filled"
            border={"none"}
            cursor={"pointer"}
          >
            {/* <option value={""}>Choose your budget preferences</option> */}
            <option value={"asc"}>Lower to higher</option>
            <option value={"desc"}>Higher to lower</option>
          </Select>
        </Box>
      </Flex>
    </Box>
  );
};
