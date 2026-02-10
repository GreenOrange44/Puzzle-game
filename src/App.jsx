import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Placeholder components for now
const LoginPage = () => <div className="p-10 text-center"><h1>Login Page (Phase 1)</h1></div>;
const GamePage = () => <div className="p-10 text-center"><h1>Game Interface (Phase 2)</h1></div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans text-gray-900">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;