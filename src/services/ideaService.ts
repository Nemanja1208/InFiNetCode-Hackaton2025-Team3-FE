import type { IdeaSession, IdeaSessionPayload } from '../types/ideaSession';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchIdeas = async (): Promise<IdeaSession[]> => {
  return []; // Not yet implemented
};

export const postUserIdeaSession = async (
  payload: IdeaSessionPayload
): Promise<IdeaSession> => {
  try {
    const res = await fetch(`${API_BASE_URL}/ideasessions/CreateIdeaSession`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(
        `Failed to create idea session: ${err?.message || res.statusText}`
      );
    }

    const data = await res.json();

    return {
      id: data.id || data.ideaId,
      title: data.title,
      createdAt: data.createdAt,
      steps: data.steps ?? [],
    };
  } catch (err) {
    console.error('Error in postUserIdeaSession:', err);
    throw err;
  }
};
