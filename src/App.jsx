import React, { useEffect } from 'react';
import './styles/progheads.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ProgheadsLanding from './components/ProgheadsLanding';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProgheadsLanding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;