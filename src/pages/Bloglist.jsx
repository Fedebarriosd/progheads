import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogList() {
  return (
    <Container className="my-5">
      <h1 className="display-4 text-gold mb-4">Blog</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {posts.map((post) => (
          <Col key={post.slug}>
            <Card bg="dark" text="white" className="h-100">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {new Date(post.date).toLocaleDateString()}
                </Card.Subtitle>
                <Card.Text>{post.excerpt}</Card.Text>
                <Button
                  as={Link}
                  to={`/blog/${post.slug}`}
                  variant="outline-gold"
                >
                  Leer PDF
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
