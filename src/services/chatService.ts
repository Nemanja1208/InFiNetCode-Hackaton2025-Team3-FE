import type { IdeaSession, Step } from '../types/ideaSession';
import ideaSessionData from '../mock/ideaSession.json';
import stepsData from '../mock/steps.json';

// Get one session including all its steps
export const getSession = async (
  _sessionId: string
): Promise<IdeaSession & { steps: Step[] }> => {
  // TODO: Replace this mock with a real API call later
  return {
    ...ideaSessionData,
    steps: stepsData,
  };
};

// Simulate sending a message and getting an AI response
export const sendMessage = async (
  _ideaSessionId: string,
  userInput: string
): Promise<Step> => {
  // TODO: Replace with POST /api/steps when backend is ready
  return {
    id: `mock-${Date.now()}`,
    userInput,
    aiResponse: 'This is a mock AI response.',
  };
};
