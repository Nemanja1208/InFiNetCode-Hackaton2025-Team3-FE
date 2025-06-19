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
    <div className='min-h-screen p-4'>
      <h1 className='text-2xl font-bold mb-4'>Chat Page</h1>
      <p>
        <strong>Session ID:</strong> {sessionId}
      </p>
      <p>
        <strong>Session Title:</strong> {session?.title}
      </p>
      <p>
        <strong>Number of Steps:</strong> {steps.length}
      </p>

      <div className='mt-6 space-y-4'>
        {steps.map((step) => (
          <div key={step.id} className='border p-4 rounded shadow'>
            <p>
              <strong>User:</strong> {step.userInput}
            </p>
            <p>
              <strong>AI:</strong> {step.aiResponse}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatPage;
