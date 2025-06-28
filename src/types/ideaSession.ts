export interface IdeaSession {
  id: string;
  title: string;
  createdAt: string;
  steps?: Step[];
}

export interface Step {
  id: string;
  userInput: string;
  aiResponse: string;
  order: number;
  stepTemplateId: string;
  ideaSessionId: string;
  createdAt: string;
  // TODO: Add updatedAt if needed later
}
