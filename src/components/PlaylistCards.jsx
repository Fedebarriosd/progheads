import React from 'react';
import '../styles/progheads.css';

const playlists = [
  {
    id: 1,
    title: 'Esenciales Prog Rock',
    cover: '/images/Esenciales-progrock.webp',
    url: 'https://open.spotify.com/playlist/0uwCkFqV1Y4JBclgVvY7wm?si=2456fb29c3e3461e',
    description: 'Las piezas fundamentales del prog clásico: épica, poesía británica y teclados interminables.',
    alt: 'Portada de la playlist Esenciales Prog Rock'
  },
  {
    id: 2,
    title: 'Esenciales Prog Metal',
    cover: '/images/Esenciales-progmetal.webp',
    url: 'https://open.spotify.com/playlist/7EoJ9feE750MVfH5dD0y7e?si=db1fb4d345984bd8',
    description: 'Como el metal normal, pero con más culpa, tiempos raros y menos fans.',
    alt: 'Portada de la playlist Esenciales Prog Metal'
  },
  {
    id: 3,
    title: 'Gemas Ocultas Prog Rock',
    cover: '/images/Joyas-progrock.webp',
    url: 'https://open.spotify.com/playlist/5eVp0rURaECwDNbBBfSUjS?si=cf6f8621c76d43de',
    description: 'Bandas olvidadas, discos raros, joyas que nunca llegaron al mainstream… hasta ahora.',
    alt: 'Portada de la playlist Gemas Ocultas Prog Rock'
  },
  {
    id: 4,
    title: 'Gemas Ocultas Prog Metal',
    cover: '/images/Joyas-progmetal.webp',
    url: 'https://open.spotify.com/playlist/3D46JhSnt0hO2APMTkXd0x?si=eb907ff493d94b06',
    description: 'Solos interminables, growls existenciales y estructuras que desafían toda lógica... y popularidad.',
    alt: 'Portada de la playlist Gemas Ocultas Prog Metal'
  }
];

const PlaylistCards = () => {
  return (
    <section className="progheads-section py-5">
      <div className="container">
        <h2 className="mb-4" data-aos="fade-right">Playlists destacadas</h2>
        <div className="row gy-4">
        {playlists.map((pl, index) => (
          <div
            className="col-12 col-md-6"
            key={pl.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="playlist-card p-3 h-100 d-flex flex-column">
              <h5 className="playlist-title mb-2">{pl.title}</h5>
              {pl.description && (
                <p className="playlist-description">{pl.description}</p>
              )}
              <a
                href={pl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="d-block mt-auto"
              >
                <img
                  src={pl.cover}
                  alt={pl.title}
                  className="img-fluid playlist-cover"
                />
              </a>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default PlaylistCards;
