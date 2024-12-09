import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/pages/Contact';
import LandingPage from './pages/LandingPage'; 

import Success from './pages/Success';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thankyou" element={<Success/>} />
      </Routes>
    </Router>
  );
}

export default App;
