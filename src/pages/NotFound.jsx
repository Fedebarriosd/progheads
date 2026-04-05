import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/progheads.css';
import '../styles/notfound.css';

const NotFound = () => {
  return (
    <div className="progheads-bg notfound-wrapper text-light">
      <img src="/images/ornamento-esquina.png" className="corner corner-top-left" alt="" />
      <img src="/images/ornamento-esquina.png" className="corner corner-top-right" alt="" />
      <img src="/images/ornamento-esquina.png" className="corner corner-bottom-left" alt="" />
      <img src="/images/ornamento-esquina.png" className="corner corner-bottom-right" alt="" />

      <div className="notfound-content text-center">
        <p className="notfound-label">Error</p>
        <h1 className="notfound-code">404</h1>
        <div className="notfound-divider">⁕ ⁕ ⁕</div>
        <h2 className="notfound-title">Esta página no existe</h2>
        <p className="notfound-subtitle">
          Como una suite de veinte minutos que nunca llega al clímax,
          <br />lo que buscás se perdió en algún rincón del universo progresivo.
        </p>
        <Link to="/" className="btn btn-outline-gold btn-lg mt-4">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
