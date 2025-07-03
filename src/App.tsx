import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import UserQuestionsPage from './pages/UserQuestionsPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import Layout from './components/Layout';

const App = () => {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/chat/:sessionId' element={<ChatPage />} />
          <Route path='/user-questions' element={<UserQuestionsPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
