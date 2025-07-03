import { Routes, Route, useLocation } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import UserQuestionsPage from './pages/UserQuestionsPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import Layout from './components/Layout';
import UserInfoPage from './pages/UserInfoPage';

const App = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/' || location.pathname === '/login';

  return (
    <>
         {!hideNavbar && <Layout>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/userinfo' element={<UserInfoPage />} />
          <Route path='/chat/:sessionId' element={<ChatPage />} />
          <Route path='/user-questions' element={<UserQuestionsPage />} />
        </Routes>
      </Layout>}
       {hideNavbar && (
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      )}
    </>
  );
};

export default App;
