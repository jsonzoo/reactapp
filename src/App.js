import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Events from './components/events';
import Connect from './components/connect';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path ="/events" element={<Events />} />
        <Route path ="/connect" element={<Connect />} />
      </Routes>
    </Router>
  );
}

export default App;