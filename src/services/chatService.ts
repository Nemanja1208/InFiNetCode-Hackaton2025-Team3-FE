import type { IdeaSession, Step } from '../types/ideaSession';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getSession = async (
  sessionId: string
): Promise<IdeaSession & { steps: Step[] }> => {
  try {
    const res = await fetch(`${API_BASE_URL}/ideasession/${sessionId}`, {
      credentials: 'include',
    });
    if (!res.ok) throw new Error('Failed to fetch session');
    const data = await res.json();
    return {
      id: data.ideaId,
      title: data.title,
      createdAt: data.createdAt,
      steps: data.steps.map((step: any) => ({
        id: step.stepId,
        userInput: step.userInput,
        aiResponse: step.aiResponse,
      })),
    };
  } catch (err) {
    console.error('Error in getSession:', err);
    throw err;
  }
};

export const sendMessage = async (
  ideaSessionId: string,
  userInput: string
): Promise<Step> => {
  try {
    const res = await fetch(`${API_BASE_URL}/step`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ideaSessionId,
        stepTemplateId: '00000000-0000-0000-0000-000000000001', // TODO: Replace with dynamic selection
        userInput,
        aiResponse: 'placeholder', // TODO: Replace with real AI integration
        order: 0, // TODO: Use actual step order logic
      }),
    });

    if (!res.ok) throw new Error('Failed to create step');

    const data = await res.json();

    return {
      id: data.id,
      userInput: data.userInput,
      aiResponse: data.aiResponse,
      order: data.order,
      stepTemplateId: data.stepTemplateId,
      ideaSessionId: data.ideaSessionId,
      createdAt: data.createdAt,
      // updatedAt: data.updatedAt, // TODO: Add if backend provides this
    };
  } catch (err) {
    console.error('Error in sendMessage:', err);
    throw err;
  }
};
