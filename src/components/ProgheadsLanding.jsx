import React, { useState } from 'react';
import '../styles/progheads.css';
import { FaInstagram, FaSpotify } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PlaylistCards from './PlaylistCards';
import { posts } from '../data/posts';


const latestPost = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))[0];

const ProgheadsLanding = () => {
  const [showHammill, setShowHammill] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  
  const handleClick = () => {
    if (showHammill) {
      setIsFadingOut(true);
      setTimeout(() => {
        setShowHammill(false);
        setIsFadingOut(false);
      }, 500);
    } else {
      setShowHammill(true);
    }
  };
  
  
  return (
    <div className="progheads-bg text-light">
    <img src="/ornamento-esquina.png" className="corner corner-top-left" alt="decoración esquina" />
    <img src="/ornamento-esquina.png" className="corner corner-top-right" alt="decoración esquina" />
    <img src="/ornamento-esquina.png" className="corner corner-bottom-left" alt="decoración esquina" />
    <img src="/ornamento-esquina.png" className="corner corner-bottom-right" alt="decoración esquina" />
      <section className="progheads-hero text-center py-5">
        <div className="container">
          <h1 className="display-3 progheads-title">Progheads_PY</h1>
          <p className="lead progheads-subtitle">
            Explorando los rincones más teatrales y exuberantes del progresivo
          </p>
          <div className="d-flex justify-content-center gap-4 mt-4">
            <a
              href="https://www.instagram.com/progheads_py"
              className="icon-hover text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={40} />
            </a>
            <a
              href="https://open.spotify.com/user/315ootae35fgsxa3yxg3njshvq3y"
              className="icon-hover text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSpotify size={40} />
            </a>
          </div>
        </div>
      </section>

      <section className="progheads-section py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="mb-4" data-aos="fade-right" data-aos-delay="100">Sobre el proyecto</h2>
          <p>
            Progheads_PY nace de la necesidad de tener una comunidad de jóvenes que amen el progresivo dentro del Paraguay.
          </p>
        </div>
      </section>

      <section className="follow-instagram py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h2 className="display-5 text-gold mb-3">¡Seguinos en Instagram!</h2>
          <p className="lead mb-4">
            Ahí compartimos todas nuestras novedades, reseñas, noticias y memes.
          </p>
          <a
            href="https://www.instagram.com/progheads_py"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-gold btn-lg"
          >
            <FaInstagram size={24} className="me-2" />
            @progheads_py
          </a>
        </div>
      </section>

      <PlaylistCards />

      <section className="progheads-section py-5">
        <div className="container">
          <h2 className="mb-4 text-gold" data-aos="fade-right">Último artículo del blog</h2>
          <div className="latest-post-card" data-aos="fade-up" data-aos-delay="100">
            <span className="latest-post-badge">Nuevo</span>
            <p className="latest-post-date">{latestPost.date}</p>
            <h3 className="latest-post-title">{latestPost.title}</h3>
            <p className="latest-post-excerpt">{latestPost.excerpt}</p>
            <Link to={`/blog/${latestPost.slug}`} className="btn btn-outline-gold mt-2">
              Leer artículo
            </Link>
          </div>
        </div>
      </section>

      <section className="footer-section text-center">
        <p className="footer-credit text-center text-light small mt-4">
          Un proyecto creado por{' '}
          <a
            href="https://www.fedebarriosd.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver portfolio"
            style={{ all: 'unset'}}
          >
            Fede Barrios
          </a>
          , bajo la sombra intensa de{' '}
          <button className="hammill-button" onClick={handleClick}>
            Peter Hammill
          </button>
        </p>

        {showHammill && (
          <img
            src="/hammill.png"
            alt="Peter Hammill"
            className={`hammill-img mt-3 ${isFadingOut ? 'fadeOut' : 'fadeIn'}`}
          />
        )}

        <img
          src="/ornamento-footer.png"
          alt="ornamento-footer"
          className="footer-ornamento mt-2"
        />
      </section>
    </div>
  );
};

export default ProgheadsLanding;
