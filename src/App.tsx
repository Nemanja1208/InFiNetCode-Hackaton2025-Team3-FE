import { Routes, Route, useLocation } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import UserQuestionsPage from './pages/UserQuestionsPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import Layout from './components/Layout';
import UserInfoPage from './pages/UserInfoPage';
import LogoutPage from './pages/LogoutPage';

const App = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/logout';

  return (
    <>
         {!hideNavbar && <Layout>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/userinfo' element={<UserInfoPage />} />
          <Route path='/chat/:sessionId' element={<ChatPage />} />
          <Route path='/user-questions' element={<UserQuestionsPage />} />
          <Route path='/logout' element={<LogoutPage />} />
        </Routes>
      </Layout>}
       {hideNavbar && (
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/logout' element={<LogoutPage />} />
        </Routes>
      )}
    </>
  );
};

export default App;
