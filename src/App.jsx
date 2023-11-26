import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  const authUser = null;

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
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Homepage />}
          />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}
