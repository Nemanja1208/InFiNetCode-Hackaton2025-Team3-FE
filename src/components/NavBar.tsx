import { Box, Flex, Spacer, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {

return (
    <Flex p={1} bg="gray.50" boxShadow="md" align="center">
      <Box>
        <Link to="/"><Button variant="ghost">Home</Button></Link>
        <Link to="/dashboard"><Button variant="ghost">Dashboard</Button></Link>
        <Link to="/user-questions"><Button variant="ghost">New idea</Button></Link>
      </Box>
      <Spacer />
        <Link to="/login"><Button variant="ghost">Login</Button></Link>
        <Link to="/logout"><Button variant="ghost">Logout</Button></Link>
    </Flex>
  );
};

export default Navbar;
