const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const loginGoogleUrl = `${API_BASE_URL}/auth/login-google`;
const loginGitHubUrl = `${API_BASE_URL}/auth/login-github`;

import {
  Box,
  Button,
  Flex,
  Stack,
  Text
} from "@chakra-ui/react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const LoginPage = () => {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={"white"}
    >
      <Box
        bg={"#F8F4E3"}
        p={8}
        rounded="2xl"
        boxShadow="lg"
        border="1px solid"
        borderColor="gray.50"
        maxW="lg"
        w="full"
      >
        <Stack align="center" p={{lg:"50px", md:"20px", sm:"10px"}} >
          <Text fontSize="2xl" my="20px">
            Let’s get started!
          </Text>

          <Stack w={{sm:"100%", lg:"80%"}}>
            <Button
              bg="#36558F"
              color="white"
              variant="solid"
              my="20px"
              onClick={() => window.location.assign(loginGoogleUrl)}
            >
                <FaGoogle style={{ marginRight: "8px" }} />
              Log in with Google
            </Button>

            <Button
              bg="#36558F"
              color="white"
              variant="solid"
              mb="20px"
              onClick={() => window.location.assign(loginGitHubUrl)}
            >
              <FaGithub style={{ marginRight: "8px" }} />
              Log in with GitHub
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};

export default LoginPage;
