import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';

export default function App() {
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
