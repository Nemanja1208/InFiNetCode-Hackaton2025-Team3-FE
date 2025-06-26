import { useState } from 'react';
import { Box, Heading, Input, Textarea, Button } from '@chakra-ui/react';
import { Select as ChakraSelect } from '@chakra-ui/select';

const UserQuestionsPage = () => {
  const [ideaTitle, setIdeaTitle] = useState('');
  const [ideaPurpose, setIdeaPurpose] = useState('');
  const [ideaGoal, setIdeaGoal] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [timeEstimate, setTimeEstimate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = () =>
    ideaTitle.trim() &&
    ideaPurpose.trim() &&
    ideaGoal.trim() &&
    targetAudience.trim() &&
    experienceLevel.trim() &&
    timeEstimate.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert('Please fill out all fields.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      Ideas: {
        Title: ideaTitle,
        Audience: targetAudience,
        Purpose: ideaPurpose,
      },
      Mvp_Plans: {
        Goal: ideaGoal,
        TimeEstimate: timeEstimate,
      },
      User: {
        Level: experienceLevel,
      },
    };

    console.log('Payload to be sent:', payload);

    // TODO: Replace with POST request
    // TODO: Redirect on success
    setIsSubmitting(false);
  };

  return (
    <Box className='min-h-screen py-12 px-4 flex justify-center'>
      <Box className='w-full max-w-2xl p-8 rounded' bg='#f8f4e3'>
        <Heading as='h1' size='lg' mb={6} textAlign='center' color='gray.800'>
          Tell us about your idea
        </Heading>

        <form onSubmit={handleSubmit} className='space-y-5'>
          <Box>
            <label className='block font-medium mb-1 text-gray-800'>
              What is your idea?
            </label>
            <Input
              value={ideaTitle}
              onChange={(e) => setIdeaTitle(e.target.value)}
              borderColor='gray.400'
              _focus={{ borderColor: 'var(--color-primary)' }}
              color='gray.800'
              placeholder='Enter your idea...'
              variant='outline'
            />
          </Box>

          <Box>
            <label className='block font-medium mb-1 text-gray-800'>
              What is the purpose of your application?
            </label>
            <Textarea
              value={ideaPurpose}
              onChange={(e) => setIdeaPurpose(e.target.value)}
              resize='none'
              borderColor='gray.400'
              _focus={{ borderColor: 'var(--color-primary)' }}
              color='gray.800'
              placeholder='Describe the purpose...'
              variant='outline'
            />
          </Box>

          <Box>
            <label className='block font-medium mb-1 text-gray-800'>
              What do you want to achieve with this project?
            </label>
            <Textarea
              value={ideaGoal}
              onChange={(e) => setIdeaGoal(e.target.value)}
              resize='none'
              borderColor='gray.400'
              _focus={{ borderColor: 'var(--color-primary)' }}
              color='gray.800'
              placeholder='Describe your goal...'
              variant='outline'
            />
          </Box>

          <Box>
            <label className='block font-medium mb-1 text-gray-800'>
              Who is your target audience?
            </label>
            <Input
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              borderColor='gray.400'
              _focus={{ borderColor: 'var(--color-primary)' }}
              color='gray.800'
              placeholder='Describe your audience...'
              variant='outline'
            />
          </Box>

          <Box>
            <label className='block font-medium mb-1 text-gray-800'>
              How much experience do you have?
            </label>
            <ChakraSelect
              defaultValue=''
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              required
              bg='#f8f4e3'
              color='gray.800'
              borderColor='gray.400'
              focusBorderColor='var(--color-primary)'
            >
              <option value='' disabled hidden>
                Select experience level
              </option>
              <option value='Beginner'>Beginner</option>
              <option value='Intermediate'>Intermediate</option>
              <option value='Advanced'>Advanced</option>
            </ChakraSelect>
          </Box>

          <Box>
            <label className='block font-medium mb-1 text-gray-800'>
              How much time do you want to spend on this project?
            </label>
            <Input
              value={timeEstimate}
              onChange={(e) => setTimeEstimate(e.target.value)}
              borderColor='gray.400'
              _focus={{ borderColor: 'var(--color-primary)' }}
              color='gray.800'
              placeholder='Ex. 2 weeks'
              variant='outline'
            />
          </Box>

          <Button
            type='submit'
            disabled={!isFormValid() || isSubmitting}
            className='text-white'
            style={{ background: 'var(--color-primary)' }}
            _hover={{ background: 'var(--color-hover)' }}
            width='full'
          >
            {isSubmitting ? 'Submitting...' : 'Submit & Preview Payload'}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default UserQuestionsPage;
