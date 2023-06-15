import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  IconButton,
  InputRightElement,
} from "@chakra-ui/react";
import { MdSearch, MdCancel } from "react-icons/md";

interface PlacesFunctionalityProps {
  query: string;
  setQuery: (query: string) => void;
}

export const PlacesFunctionality = ({ query, setQuery }: PlacesFunctionalityProps) => {
  return (
    <Box p={"2rem 0"}>
      <Box w={"50%"} margin={"auto"}>
        <InputGroup>
          <InputLeftElement>
            <IconButton aria-label={"search"} icon={<MdSearch />} />
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
    </Box>
  );
};
