import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import axios from "axios";
import { useToast } from "@chakra-ui/react";
import bg1 from "../assets/images/imagbg1.png";

import { Link, NavLink } from "react-router-dom";
import { signup } from "../redux/authentication/action";
import { LoginData } from "../utils/types";
import { useAppDispatch, useAppSelector } from "../redux/store";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const dispatch = useAppDispatch();
  const toast = useToast();

  const isRegister = useAppSelector((store) => store.authReducer.isRegistered);
  const loader = useAppSelector((store) => store.authReducer.isLoading);
  const error = useAppSelector((store) => store.authReducer.isError);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !mobile) {
      toast({
        title: "Registration Failed.",
        description: "All fields are required.",
        status: "warning",
        duration: 4000,
        position: "top",
        isClosable: true,
      });
      return;
    }

    if (mobile.toString().length !== 10) {
      toast({
        title: "Correct details Required!",
        description: "Invalid mobile number!",
        status: "warning",
        duration: 4000,
        position: "top",
        isClosable: true,
      });
      return;
    }

    let userData: LoginData = {
      firstName,
      lastName,
      email,
      password,
      mobile,
    };

    let check = false;
    const data = await axios
      .get("http://localhost:8080/user")
      .then((res) => res.data);
    if (data.length > 0) {
      data.forEach((el: any) => {
        if (el.email === userData.email) {
          check = true;
        }
      });
    } else {
      dispatch(signup(userData));
      toast({
        title: "User Registered Successfully.",
        description: "Please log in to continue.",
        status: "success",
        duration: 4000,
        position: "top",
        isClosable: true,
      });
      return;
    }

    if (!check) {
      dispatch(signup(userData));
      toast({
        title: "User Registered Successfully.",
        description: "Please log in to continue.",
        status: "success",
        duration: 4000,
        position: "top",
        isClosable: true,
      });
      return;
    }

    check &&
      toast({
        title: "User already registered.",
        description: "Please log in to continue.",
        status: "error",
        duration: 4000,
        position: "top",
        isClosable: true,
      });
    return;
  };

  return loader ? (
    <Spinner />
  ) : (
    <Flex
      minH={"100vh"}
      align={"center"}
      pt={"50px"}
      justify={"center"}
      direction={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
        "2xl": "row",
      }}
      gap={"0px"}
    >
      <Stack
        w={{
          base: "95%",
          sm: "95%",
          md: "95%",
          lg: "50%",
          xl: "50%",
          "2xl": "50%",
        }}
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Create your Account
          </Heading>
        </Stack>
        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
              <Box>
                <FormControl id="firstName">
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    value={firstName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFirstName(e.target.value)
                    }
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    value={lastName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setLastName(e.target.value)
                    }
                  />
                </FormControl>
              </Box>

              <FormControl id="mobile">
                <FormLabel>Mobile Number</FormLabel>
                <Input
                  type="number"
                  value={mobile}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setMobile(e.target.value)
                  }
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPassword(e.target.value)
                    }
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"black"}
                  type="submit"
                  color={"white"}
                  _hover={{
                    bg: "gray.700",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
      <Box
        bgImg={bg1}
        w={{
          base: "95%",
          sm: "95%",
          md: "95%",
          lg: "50%",
          xl: "50%",
          "2xl": "50%",
        }}
        // maxW={"400px"}

        height={"410px"}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} w="350px">
          <Heading>Hello, There!</Heading>
          <Text align="center" fontSize="lg" fontWeight="700" color="black">
            Already a User? Sign In to Continue
          </Text>
          <Button w="300px">
            <NavLink to={"/login"}>Log In</NavLink>
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}
