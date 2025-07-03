import type { ReactNode } from 'react';
import Navbar from './NavBar';
import { Box } from '@chakra-ui/react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Navbar />
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
