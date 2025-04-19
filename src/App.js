import React, { useState } from 'react';
import './styles/progheads.css';
import PlaylistCards from './components/PlaylistCards'; // O ajustá si tu archivo está en otra ruta
import { FaInstagram, FaSpotify } from 'react-icons/fa';

const App = () => {
  const [showHammill, setShowHammill] = useState(false);
  const handleClick = () => setShowHammill(!showHammill);

  return (
    <div className="progheads-bg text-light">
      <img src="/ornamento-esquina.png" className="corner corner-top-left" alt="decoración esquina" />
      <img src="/ornamento-esquina.png" className="corner corner-top-right" alt="decoración esquina" />

      <header className="main-title">
        <h1 onClick={handleClick}>Progheads_PY</h1>
        {showHammill && <p className="hammill-quote">“This is the way the world ends, not with a bang but a Van der Graaf Generator track.”</p>}
      </header>

      <section className="playlist-section">
        <PlaylistCards />
      </section>

      <footer className="footer">
        <p>Seguí la página</p>
        <a href="https://instagram.com/progheads_py" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://open.spotify.com/user/progheads" target="_blank" rel="noopener noreferrer"><FaSpotify /></a>
      </footer>
    </div>
  );
};

export default App;
