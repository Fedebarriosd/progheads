import React from 'react';
import './styles/progheads.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProgheadsLanding from './components/ProgheadsLanding';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProgheadsLanding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
