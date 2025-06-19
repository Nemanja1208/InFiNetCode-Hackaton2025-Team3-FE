export interface IdeaSession {
  id: string;
  title: string;
  createdAt: string;
}

export interface Step {
  id: string;
  userInput: string;
  aiResponse: string;
}
