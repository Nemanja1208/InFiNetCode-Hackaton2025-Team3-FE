import { Box, Flex, Spacer, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
const { user, setUser } = useAuth();

return (
    <Flex p={1} bg="gray.50" boxShadow="md" align="center">
        {user && (
          <>
            <Box>
              <Link to="/"><Button variant="ghost">Home</Button></Link>
              <Link to="/dashboard"><Button variant="ghost">Dashboard</Button></Link>
              <Link to="/user-questions"><Button variant="ghost">New idea</Button></Link>
            </Box>
            <Spacer />
            <Flex align="center" gap={2}>
              <Link to="/userinfo"><Button variant="ghost">{user.name}</Button></Link>
              <Link to="/logout"><Button variant="ghost">Logout</Button></Link>
            </Flex>
          </>
        )}
    </Flex>
  );
};

export default Navbar;
