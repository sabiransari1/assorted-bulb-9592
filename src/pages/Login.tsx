import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import bg1 from "../assets/images/imagbg1.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const navigate = useNavigate();
  const URL = "https://safer.onrender.com";
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data = await axios(`${URL}/users`).then((res) => res.data);

    if (!email || !password) {
      toast({
        title: "failed",
        description: "all filled are required",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    const newData = data.find((el: any) => el.email === email);
    // console.log(newData, data)
    if (newData) {
      if (newData.password === password) {
        toast({
          title: "Log in Successful.",
          description: "Redirecting to...",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });

        setTimeout(() => {
          navigate(location.state?.data || "/", { replace: true });
        }, 1000);
        return;
      } else {
        toast({
          title: "Login Failed!!",
          description: "Password didn't match",
          status: "warning",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        return;
      }
    } else {
      toast({
        title: "Wrong credentials",
        description: "Make Sure you are registered.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      pt={"60px"}
      justify={"center"}
      direction={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
        "2xl": "row",
      }}
      p={{
        base: "0rem 1rem",
        sm: "0rem 1rem",
        md: "0rem 2rem",
        lg: "0rem 5rem",
        xl: "0rem 5rem",
        "2xl": "0rem 5rem",
      }}
    >
      <Box
        bgImg={bg1}
        m={"5px auto"}
        w={{
          base: "60%",
          sm: "75%",
          md: "75%",
          lg: "50%",
          xl: "50%",
          "2xl": "50%",
        }}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} w="350px">
          <Heading>Hello, There!</Heading>
          <Text align="center" fontSize="md" fontWeight="600" color="black">
            Are you new here? Please Sign Up for better user experience!
          </Text>
          <Button w="300px">
            <NavLink to={"/signup"}>Sign Up</NavLink>
          </Button>
        </Stack>
      </Box>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your Account</Heading>
        </Stack>
        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"black"}
                  color={"white"}
                  type="submit"
                  _hover={{
                    bg: "gray.700",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};
