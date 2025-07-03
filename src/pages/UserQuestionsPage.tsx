import { useState } from 'react';
import { Box, Heading, Input, Textarea, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { postUserIdeaSession } from '../services/ideaService';
import type { IdeaSessionPayload } from '../types/ideaSession';

const UserQuestionsPage = () => {
  const [ideaTitle, setIdeaTitle] = useState('');
  const [ideaPurpose, setIdeaPurpose] = useState('');
  const [ideaGoal, setIdeaGoal] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [timeEstimate, setTimeEstimate] = useState('');
  const [keyFeatures, setKeyFeatures] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const isFormValid = () =>
    ideaTitle.trim() &&
    ideaPurpose.trim() &&
    ideaGoal.trim() &&
    targetAudience.trim() &&
    experienceLevel.trim() &&
    timeEstimate.trim() &&
    keyFeatures.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert('Please fill out all fields.');
      return;
    }

    setIsSubmitting(true);

    const payload: IdeaSessionPayload = {
      title: ideaTitle,
      purpose: ideaPurpose,
      goal: ideaGoal,
      targetAudience: targetAudience,
      experienceLevel: experienceLevel,
      timeEstimate: timeEstimate,
      keyFeatures: keyFeatures,
    };

    try {
      const created = await postUserIdeaSession(payload);
      navigate(`/chat/${created.id}`);
    } catch (err) {
      console.error('Submit failed:', err);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box className='min-h-screen py-12 px-4 flex justify-center'>
      <Box
        className='w-full max-w-2xl p-8 rounded'
        bg='var(--color-background)'
      >
        <Heading
          as='h1'
          size='lg'
          mb={2}
          textAlign='center'
          color='var(--color-text)'
          fontWeight='bold'
        >
          Tell us about your idea:
        </Heading>
        <Box
          as='p'
          mb={8}
          textAlign='center'
          color='var(--color-text)'
          fontSize='md'
        >
          Share a few key details to help us shape your MVP plan
        </Box>

        <form onSubmit={handleSubmit} className='space-y-6'>
          <Box>
            <label
              className='block font-semibold mb-1'
              style={{ color: 'var(--color-text)' }}
            >
              What is your idea?
            </label>
            <Input
              value={ideaTitle}
              onChange={(e) => setIdeaTitle(e.target.value)}
              borderColor='var(--color-border)'
              _focus={{ borderColor: 'var(--color-primary)' }}
              color='var(--color-text)'
              placeholder='Enter your idea here'
              variant='outline'
            />
          </Box>

          <Box>
            <label
              className='block font-semibold mb-1'
              style={{ color: 'var(--color-text)' }}
            >
              What problem does it solve?
            </label>
            <Textarea
              value={ideaPurpose}
              onChange={(e) => setIdeaPurpose(e.target.value)}
              resize='none'
              borderColor='var(--color-border)'
              _focus={{ borderColor: 'var(--color-primary)' }}
              color='var(--color-text)'
              placeholder='Describe the problem your idea addresses here'
              variant='outline'
            />
          </Box>

          <Box>
            <label
              className='block font-semibold mb-1'
              style={{ color: 'var(--color-text)' }}
            >
              What is your goal with this MVP?
            </label>
            <Textarea
              value={ideaGoal}
              onChange={(e) => setIdeaGoal(e.target.value)}
              resize='none'
              borderColor='var(--color-border)'
              _focus={{ borderColor: 'var(--color-primary)' }}
              color='var(--color-text)'
              placeholder='Example: Validate demand, build a prototype, learn from users'
              variant='outline'
            />
          </Box>

          <Box>
            <label
              className='block font-semibold mb-1'
              style={{ color: 'var(--color-text)' }}
            >
              Who is your target audience?
            </label>
            <Input
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              borderColor='var(--color-border)'
              _focus={{ borderColor: 'var(--color-primary)' }}
              color='var(--color-text)'
              placeholder='Example: Parents, freelancers, students'
              variant='outline'
            />
          </Box>

          <Box>
            <label
              className='block font-semibold mb-1'
              style={{ color: 'var(--color-text)' }}
            >
              What is your experience level?
            </label>
            <Input
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              borderColor='var(--color-border)'
              _focus={{ borderColor: 'var(--color-primary)' }}
              color='var(--color-text)'
              placeholder='Example: Beginner, intermediate, expert'
              variant='outline'
            />
          </Box>

          <Box>
            <label
              className='block font-semibold mb-1'
              style={{ color: 'var(--color-text)' }}
            >
              How much time do you want to spend on this project?
            </label>
            <Input
              value={timeEstimate}
              onChange={(e) => setTimeEstimate(e.target.value)}
              borderColor='var(--color-border)'
              _focus={{ borderColor: 'var(--color-primary)' }}
              color='var(--color-text)'
              placeholder='Example: 2 weeks, 5/h week'
              variant='outline'
            />
          </Box>

          <Box>
            <label
              className='block font-semibold mb-1'
              style={{ color: 'var(--color-text)' }}
            >
              List the top 3 features you want in your product:
            </label>
            <Input
              value={keyFeatures}
              onChange={(e) => setKeyFeatures(e.target.value)}
              borderColor='var(--color-border)'
              _focus={{ borderColor: 'var(--color-primary)' }}
              color='var(--color-text)'
              placeholder='Example: Booking calendar, notifications, real-time chat'
              variant='outline'
            />
          </Box>

          <Button
            type='submit'
            disabled={!isFormValid() || isSubmitting}
            className='text-white mt-6 font-semibold'
            style={{ background: 'var(--color-primary)' }}
            _hover={{ background: 'var(--color-primary-hover)' }}
            width='full'
          >
            {isSubmitting ? 'Submitting...' : 'Generate MVP Plan'}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default UserQuestionsPage;
