import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserQuestionsPage from './pages/UserQuestionsPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/user-questions' element={<UserQuestionsPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default App;
