import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Spinner, Input, Button } from '@chakra-ui/react';
import type { IdeaSession, Step } from '../types/ideaSession';
import { getSession, sendMessage } from '../services/chatService';

const ChatPage = () => {
  const { sessionId } = useParams();
  const [session, setSession] = useState<IdeaSession | null>(null);
  const [steps, setSteps] = useState<Step[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newMessage, setNewMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!sessionId) return;
      try {
        const data = await getSession(sessionId);
        setSession(data);
        setSteps(data.steps ?? []);
      } catch (err) {
        console.error('Failed to load session:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [sessionId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [steps, isSending]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !session?.id) return;
    setIsSending(true);

    try {
      const newStep = await sendMessage(session.id, newMessage);
      setSteps((prev) => [...prev, newStep]);
    } catch (err) {
      console.error('Failed to send message:', err);
    } finally {
      setNewMessage('');
      setIsSending(false);
    }
  };

  if (isLoading) {
    return (
      <Box className='min-h-screen p-4 text-gray-800'>
        <Heading size='lg' mb={4}>
          Chat Page
        </Heading>
        <Spinner size='lg' />
        <Text mt={4}>Loading session...</Text>
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
              <Box
                bg='gray.200'
                color='gray.800'
                p={3}
                rounded='lg'
                className='max-w-md self-start'
              >
                {step.userInput}
              </Box>
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

          {isSending && (
            <Box
              bg='gray.100'
              color='gray.500'
              p={3}
              rounded='lg'
              className='max-w-md self-end italic'
            >
              AI is thinking...
            </Box>
          )}

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
            style={{ background: 'var(--color-primary)' }}
            _hover={{ background: 'var(--color-hover)' }}
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
