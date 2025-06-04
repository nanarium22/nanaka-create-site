// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Works from './pages/Works';
import Study from './pages/Study';
import Interest from './pages/Interest';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <Header /> {/* ← 全ページ共通で表示されます */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/works" element={<Works />} />
        <Route path="/study" element={<Study />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;