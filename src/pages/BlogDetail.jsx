import React from "react";
import { Container } from "react-bootstrap";
import { useParams, Navigate } from "react-router-dom";
import { posts } from "../data/posts";
import "../styles/blog.css";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  return (
    <section
      className="blog-section"
      data-aos="fade-right"
      data-aos-duration="800"
    >
      <Container className="my-5">
        <h1 className="display-4 text-gold mb-3">{post.title}</h1>
        <p className="text-light mb-4">
          {new Date(post.date).toLocaleDateString('es-PY', { timeZone: 'UTC'})}
        </p>

        <object
          data={post.pdfPath}
          type="application/pdf"
          width="100%"
          height="800px"
        >
          <p id="fallback">
            Tu navegador no soporta PDF embebido.{" "}
            <a href={post.pdfPath} target="_blank" rel="noreferrer">
              Descarga el PDF aquí.
            </a>
          </p>
        </object>

        {/* Firma al pie del post */}
        <footer className="post-signature mt-4">&mdash; {post.author}</footer>
      </Container>
    </section>
  );
}
