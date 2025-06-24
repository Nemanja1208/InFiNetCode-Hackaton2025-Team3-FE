import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Spinner, Input, Button } from '@chakra-ui/react';
import type { IdeaSession, Step } from '../types/ideaSession';
import ideaSessionData from '../mock/ideaSession.json';
import stepsData from '../mock/steps.json';

const ChatPage = () => {
  const { sessionId } = useParams();
  const [session, setSession] = useState<IdeaSession | null>(null);
  const [steps, setSteps] = useState<Step[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newMessage, setNewMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sessionId) return;
    setSession(ideaSessionData as IdeaSession);
    setSteps(stepsData as Step[]);
    setIsLoading(false);
  }, [sessionId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [steps]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setIsSending(true);

    const payload = {
      ideaSessionId: session?.id,
      userInput: newMessage,
    };
    console.log('Sending new message:', payload);

    setSteps((prev) => [
      ...prev,
      {
        id: `mock-${Date.now()}`,
        userInput: newMessage,
        aiResponse: 'This is a mock AI response.',
      },
    ]);

    setNewMessage('');
    setIsSending(false);
  };

  if (isLoading) {
    return (
      <Box className='min-h-screen p-4 text-gray-800'>
        <Heading size='lg' mb={4}>
          Chat Page
        </Heading>
        <Spinner size='lg' />
        <Text mt={4}>Loading mock data...</Text>
      </Box>
    );
  }

  return (
    <Box className='min-h-screen w-full flex justify-center p-4 text-gray-800'>
      <Box className='w-full max-w-5xl flex flex-col gap-6'>
        <Heading size='lg'>Chat Page</Heading>
        <Text>
          <strong>Session Title:</strong> {session?.title}
        </Text>

        <Box className='flex flex-col gap-4'>
          {steps.map((step) => (
            <Box key={step.id} className='flex flex-col gap-2'>
              {/* User bubble */}
              <Box
                bg='gray.200'
                color='gray.800'
                p={3}
                rounded='lg'
                className='max-w-md self-start'
              >
                {step.userInput}
              </Box>
              {/* AI bubble */}
              <Box
                bg='gray.300'
                color='gray.800'
                p={3}
                rounded='lg'
                className='max-w-md self-end'
              >
                {step.aiResponse}
              </Box>
            </Box>
          ))}
          <div ref={messagesEndRef} />
        </Box>

        <form onSubmit={handleSubmit} className='mt-6 flex gap-2'>
          <Input
            placeholder='Type your message...'
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            disabled={isSending}
            className='flex-1'
          />
          <Button
            type='submit'
            disabled={!newMessage.trim() || isSending}
            className='px-4 text-white'
            style={{
              background: 'var(--color-primary)',
            }}
            _hover={{
              background: 'var(--color-hover)',
            }}
            loading={isSending}
          >
            {isSending ? 'Sending...' : 'Send'}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ChatPage;
