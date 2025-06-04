import logo from './logo.svg';
import './App.css';

// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Works from './pages/Works';
import Interest from './pages/Interest';
import Study from './pages/Study';
import Quiz from './pages/Quiz';
import Success from './pages/Success'; // 追加

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/works" element={<Works />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/study" element={<Study />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
