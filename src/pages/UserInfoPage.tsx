import { useAuth } from '../context/AuthContext';
import { Box, Heading, Text, VStack, Container } from '@chakra-ui/react';


const UserInfoPage = () => {
  const { user, setUser } = useAuth();

  return (
     <Container maxW="lg" mt={10}>
      <Box p={6} boxShadow="lg" borderRadius="md" bg="white">
        <VStack align="start">
          <Heading size="xl">User Information</Heading>
          <Text><strong>Name:</strong> {user?.name}</Text>
          <Text><strong>Email:</strong> {user?.email}</Text>
        </VStack>
      </Box>
    </Container>
  );
}

export default UserInfoPage;
