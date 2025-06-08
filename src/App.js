// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Works from './pages/Works';
import Interest from './pages/Interest';

function App() {
  const [showHeader, setShowHeader] = useState(true); // 動画中は false

  return (
    <Router>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home setShowHeader={setShowHeader} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/works" element={<Works />} />
        <Route path="/interest" element={<Interest />} />
      </Routes>
    </Router>
  );
}

export default App;