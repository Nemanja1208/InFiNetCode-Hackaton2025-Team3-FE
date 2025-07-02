import { Routes, Route } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import UserQuestionsPage from './pages/UserQuestionsPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/chat/:sessionId' element={<ChatPage />} />
      <Route path='/user-questions' element={<UserQuestionsPage />} />
    </Routes>
  );
};

export default App;
