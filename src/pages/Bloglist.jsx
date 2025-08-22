import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
        <Row xs={1} md={2} lg={3} className="g-4">
          {posts.map((post) => (
            <Col key={post.slug}>
              <Card className="blog-card h-100">
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-light">
                    {new Date(post.date).toLocaleDateString()}
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
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
