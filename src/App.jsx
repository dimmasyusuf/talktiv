import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import LeaderboardPage from './pages/LeaderboardPage';

export default function App() {
  const authUser = true;

  if (authUser === null) {
    return (
      <main>
        <Routes>
          <Route
            path="/*"
            element={<LoginPage />}
          />
          <Route
            path="/register"
            element={<RegisterPage />}
          />
        </Routes>
      </main>
    );
  }

  return (
    <>
      <header style={{ maxWidth: '1200px', margin: 'auto' }}>
        <Navbar />
      </header>
      <main style={{ maxWidth: '1200px', margin: 'auto' }}>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/leaderboard"
            element={<LeaderboardPage />}
          />
        </Routes>
      </main>
    </>
  );
}
