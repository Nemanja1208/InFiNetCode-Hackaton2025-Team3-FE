import { useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { apiService } from '@/services/apiService';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const loginGoogleUrl = `${API_BASE_URL}/auth/login-google`;
const loginGitHubUrl = `${API_BASE_URL}/auth/login-github`;

const LogoutPage = () => {
  useEffect(() => {
    apiService
      .post('/auth/logout', null)
      .catch(() => {
        // Optionally handle logout failure
      });
  }, []);

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      px={4}
      textAlign="center"
    >
      <Heading fontSize="3xl" mb={2}>
        See you next time!
      </Heading>

      <Text fontSize="lg" mb={8}>
        Your session has ended. You can log in again to continue planning.
      </Text>

      <Box w="100%" maxW="300px">
        <Button
          bg="#36558F"
          color="white"
          variant="solid"
          mb="20px"
          w="100%"
          onClick={() => window.location.assign(loginGoogleUrl)}
        >
          <FcGoogle style={{ marginRight: '8px' }} />
          Log in with Google
        </Button>

        <Button
          bg="#36558F"
          color="white"
          variant="solid"
          w="100%"
          onClick={() => window.location.assign(loginGitHubUrl)}
        >
          <FaGithub style={{ marginRight: '8px' }} />
          Log in with GitHub
        </Button>
      </Box>
    </Flex>
  );
};

export default LogoutPage;
