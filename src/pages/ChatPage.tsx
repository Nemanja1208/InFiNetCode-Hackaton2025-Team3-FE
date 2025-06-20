import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
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

    // TODO: Replace mock with real API calls later
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

    // TODO: Replace with POST/PUT to backend when ready
    const payload = {
      ideaSessionId: session?.id,
      userInput: newMessage,
    };
    console.log('Sending new message:', payload);

    // Mock: append new step with fake AI response
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
      <div className='min-h-screen p-4'>
        <h1 className='text-2xl font-bold mb-4'>Chat Page</h1>
        <p>Loading mock data...</p>
      </div>
    );
  }

  return (
    <div className='min-h-screen p-4 flex flex-col gap-6'>
      <h1 className='text-2xl font-bold'>Chat Page</h1>
      <p className='text-gray-700'>
        <strong>Session Title:</strong> {session?.title}
      </p>

      <div className='flex flex-col gap-4'>
        {steps.map((step) => (
          <div key={step.id} className='flex flex-col gap-2'>
            {/* User bubble */}
            <div className='self-start max-w-md bg-gray-200 text-gray-800 p-3 rounded-lg'>
              {step.userInput}
            </div>

            {/* AI bubble */}
            <div className='self-end max-w-md bg-blue-600 text-white p-3 rounded-lg'>
              {step.aiResponse}
            </div>
          </div>
        ))}
        {/* Anchor för auto-scroll */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input + Send form */}
      <form onSubmit={handleSubmit} className='mt-6 flex gap-2'>
        <input
          type='text'
          placeholder='Type your message...'
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className='flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400'
        />
        <button
          type='submit'
          disabled={isSending || !newMessage.trim()}
          className={`bg-blue-600 text-white px-4 py-2 rounded ${
            isSending || !newMessage.trim()
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-blue-700'
          }`}
        >
          {isSending ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
