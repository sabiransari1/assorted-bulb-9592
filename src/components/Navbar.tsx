import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Image,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useColorMode,
  useDisclosure,
  Text,
  Switch,
} from "@chakra-ui/react";
import logoDark from "../assets/images/logoDark.png";
import logoLight from "../assets/images/logoLight.png";
import { FaSun, FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillSuitHeartFill } from "react-icons/bs";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      minH={"80px"}
      maxH={"80px"}
      align={"center"}
      justify={"space-between"}
      pos={"sticky"}
      top={"0"}
      boxShadow={
        "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
      }
      p={"0 3rem"}
      zIndex={"1"}
      bg={colorMode === "light" ? "#bcc8dd" : "black"}
      color={colorMode === "light" ? "#484848" : "white"}
    >
      {/* first */}
      <Box display={"none"}>
        <IconButton
          aria-label={"hamburger"}
          icon={<GiHamburgerMenu />}
          size={"sm"}
          onClick={onOpen}
        />

        <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody
              p={{
                base: "1rem 1rem",
                sm: "1rem 1rem",
                md: "2rem 2rem",
                lg: "2rem 5rem",
                xl: "2rem 5rem",
                "2xl": "2rem 5rem",
              }}
              bg={colorMode === "light" ? "white" : "black"}
            >
              <Link to={"/"} onClick={onClose}>
                <Text>Home</Text>
              </Link>

              <Link to={"/about"} onClick={onClose}>
                <Text>About</Text>
              </Link>

              <Link to={"/support"} onClick={onClose}>
                <Text>Support</Text>
              </Link>

              <Link to={"/housing"} onClick={onClose}>
                <Text>Housing</Text>
              </Link>

              <Link to={"/community"} onClick={onClose}>
                <Text>Community</Text>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      {/* second */}
      <Box w={"10%"}>
        <Image src={colorMode === "light" ? logoLight : logoDark} alt={"Logo"} w={"100%"} />
      </Box>

      {/* third */}
      <Flex w={"50%"} justify={"space-between"}>
        <Link to={"/"}>
          <Text>Home</Text>
        </Link>

        <Link to={"/about"}>
          <Text>About</Text>
        </Link>

        <Link to={"/support"}>
          <Text>Support</Text>
        </Link>

        <Link to={"/housing"}>
          <Text>Housing</Text>
        </Link>

        <Link to={"/community"}>
          <Text>Community</Text>
        </Link>
      </Flex>

      {/* forth */}
      <Flex w={"12%"} justify={"space-between"}>
        {/* forth.1 */}
        <Box>
          <IconButton
            aria-label={"favorite"}
            icon={<BsFillSuitHeartFill />}
            color={"#f1095d"}
            size={"sm"}
            isRound
          />
        </Box>

        {/* forth.2 */}
        <Box>
          <Switch size={"lg"} />
        </Box>

        {/* forth.3 */}
        <Box>
          <IconButton
            aria-label={"theme"}
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            isRound
            size={"sm"}
            onClick={toggleColorMode}
          />
        </Box>
      </Flex>
    </Flex>
  );
};
