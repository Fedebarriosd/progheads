// src/pages/AboutUs.jsx
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import "../styles/aboutus.css";
import AOS from "aos";
import "aos/dist/aos.css";

const team = [
  {
    id: "fede",
    name: "Fede Barrios",
    image: "/images/Fede.jpg",
    description:
      "Soy el creador y administrador de Progheads. Estudiante de Ingeniería Informática y apasionado del progresivo más oscuro. Si te gusta la página web significa mucho para mí!",
    favBands: ["Van der Graaf Generator", "Akercocke", "Voivod"],
    favAlbum: "Bath – maudlin of the Well",
    favSong: "The Manifold Curiosity – Kayo Dot",
    favArtist: "Toby Driver",
    favSubgenre: "Blackened Prog",
  },
  {
    id: "adri",
    name: "Adrián Cardozo",
    image: "/images/Adrian.jpg",
    description:
      "Hola, soy Adri. Diseñador gráfico y guitarrista en Suspiria. Los posts más lindos de Progheads son obra mía.",
    favBands: ["Opeth", "Gojira", "Jinjer"],
    favAlbum: "Ghost Reveries – Opeth",
    favSong: "Citizen Erased – Muse",
    favArtist: "Matt Bellamy",
    favSubgenre: "Death Metal Progresivo",
  },
  {
    id: "mauri",
    name: "Mauri Pico",
    image: "/images/Mauri.jpg",
    description:
      "Soy Mauri, un apasionado del rock progresivo y la música en general. De entre los 3 soy el más variado en cuanto a gustos, pero siempre llevo al prog clásico en el corazón <3.",
    favBands: ["King Crimson", "Camel", "Tool"],
    favAlbum: "Still Life - Opeth",
    favSong: "Cadence and Cascade – King Crimson",
    favArtist: "Robert Fripp",
    favSubgenre: "Prog Rock Clásico",
  },
];

export default function AboutUs() {
  // Siempre al montar el componente, volvemos al top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 600 });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = (member) => {
    setSelected(member);
    setShow(true);
  };

  return (
    <section className="about-us-section d-flex flex-column align-items-center position-relative">
      {/* Contenedor flex de ornamentos laterales */}
      <div className="ornamentos-wrapper d-none d-xxl-flex w-100 position-absolute top-0 justify-content-between">
        <img
          src="/images/ornamento-lateral.png"
          alt=""
          className="ornamento-lateral"
        />
        <img
          src="/images/ornamento-lateral.png"
          alt=""
          className="ornamento-lateral mirror"
        />
      </div>

      {/* FOTO GRUPAL */}
      <Container className="text-center mb-5" data-aos="fade-down">
        <img
          src="/images/progheads-grupal.jpg"
          alt="Equipo Progheads PY"
          className="img-fluid group-photo"
        />
      </Container>

      {/* SOBRE NOSOTROS */}
      <Container className="text-center mb-5">
        <h1 className="display-4">Sobre Nosotros</h1>
      </Container>

      <Container>
        <Row xs={1} md={3} className="g-4">
          {team.map((m) => (
            <Col key={m.id} data-aos="fade-up">
              <Card
                bg="dark"
                text="white"
                className="h-100 card-gold d-flex align-items-center"
                onClick={() => handleShow(m)}
              >
                <Card.Body>
                  <Card.Title className="text-gold">{m.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* MODAL DE INFO */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>{selected?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          {selected?.image && (
            <img
              src={selected.image}
              alt={selected.name}
              className="modal-img mb-3"
            />
          )}
          <p>{selected?.description}</p>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="outline-light" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* QUÉ NOS GUSTA */}
      <Container className="text-center mt-5 mb-3">
        <h2 className="know-us-title" data-aos="fade-up">
          Qué nos gusta
        </h2>
      </Container>
      <Container className="mb-5">
        <Row xs={1} md={3} className="g-4">
          {team.map((m) => (
            <Col key={m.id} data-aos="zoom-in">
              <Card bg="dark" text="white" className="card-gold know-us-card">
                <Card.Body>
                  <Card.Title className="text-gold">{m.name}</Card.Title>
                  <Card.Text as="div">
                    <strong>Bandas favoritas:</strong> {m.favBands.join(", ")}
                    <br />
                    <strong>Subgénero favorito:</strong> {m.favSubgenre}
                    <br />
                    <strong>Álbum preferido:</strong> {m.favAlbum}
                    <br />
                    <strong>Canción favorita:</strong> {m.favSong}
                    <br />
                    <strong>Artista (persona) favorito:</strong> {m.favArtist}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
