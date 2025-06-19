import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { IdeaSession, Step } from '../types/ideaSession';
import ideaSessionData from '../mock/ideaSession.json';
import stepsData from '../mock/steps.json';

const ChatPage = () => {
  const { sessionId } = useParams();
  const [session, setSession] = useState<IdeaSession | null>(null);
  const [steps, setSteps] = useState<Step[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!sessionId) return;

    // TODO: Replace mock with real API calls later
    setSession(ideaSessionData as IdeaSession);
    setSteps(stepsData as Step[]);
    setIsLoading(false);
  }, [sessionId]);

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
      </div>
    </div>
  );
};

export default ChatPage;
