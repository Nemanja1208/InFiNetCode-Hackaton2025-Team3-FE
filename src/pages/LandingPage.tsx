import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import landingBg from '../assets/landing-bg.jpg';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <Box className='min-h-screen flex flex-col md:flex-row'>
      {/* Left column */}
      <Box
        className='w-full md:w-1/2 flex flex-col justify-center items-center text-center px-6 py-12'
        bg='var(--color-background)'
      >
        <Heading
          as='h1'
          size='xl'
          color='var(--color-primary)'
          fontWeight='bold'
          mb={4}
        >
          From idea to MVP – faster with AI
        </Heading>
        <Text color='var(--color-text)' fontSize='md' mb={8}>
          AI-MVP-Planner guides you from an idea to a concrete MVP plan using AI
          support
        </Text>
        <Button
          size='lg'
          className='font-semibold'
          style={{ background: 'var(--color-primary)', color: 'white' }}
          _hover={{ background: 'var(--color-primary-hover)' }}
          onClick={handleLogin}
          mb={16}
        >
          Log in and start
        </Button>
      </Box>

      {/* Right column */}
      <Box
        className='w-full md:w-1/2 bg-cover bg-center'
        style={{
          backgroundImage: `url(${landingBg})`,
        }}
        aria-label='Developer workspace background'
      />
    </Box>
  );
};

export default LandingPage;
