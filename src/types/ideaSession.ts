export interface IdeaSession {
  id: string;
  title: string;
  createdAt: string;
  steps?: Step[]; // Temporarily included for mock data integration
}

export interface Step {
  id: string;
  userInput: string;
  aiResponse: string;
}
