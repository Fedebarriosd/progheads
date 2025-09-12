import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import "../styles/blog.css";

export default function BlogList() {
  return (
    <section
      className="blog-section"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <Container className="my-5">
        <h1 className="display-4 text-gold mb-4">Blog</h1>

        <div className="masonry">
          {[...posts]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((post) => (
              <article key={post.slug} className="masonry-item">
                <Card className="blog-card">
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Subtitle className="mb-2 mt-1 text-light">
                      {new Date(`${post.date}T00:00:00`)
                        .toLocaleDateString('es-PY')}
                    </Card.Subtitle>
                    <Card.Text>{post.excerpt}</Card.Text>

                    <div className="d-flex align-items-center justify-content-between mt-3 flex-wrap gap-2">
                      <Button
                        as={Link}
                        to={`/blog/${post.slug}`}
                        variant="outline-gold"
                      >
                        Leer PDF
                      </Button>
                      <span className="post-author ms-auto">— {post.author}</span>
                    </div>
                  </Card.Body>
                </Card>
              </article>
            ))}
        </div>
      </Container>
    </section>
  );
}
