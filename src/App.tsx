import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import UserQuestionsPage from './pages/UserQuestionsPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/chat/:sessionId' element={<ChatPage />} />
      <Route path='/user-questions' element={<UserQuestionsPage />} />
    </Routes>
  );
};

export default App;
