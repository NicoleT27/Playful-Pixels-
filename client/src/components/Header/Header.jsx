import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function header() {
  return (
    <>
      <Container>
        <Row className="row">
          <Col className="col">
            <h1 class="neon" data-text="U">
              <span class="flicker-slow">Playful</span><span class="flicker-slow"></span>Pixels
              <span class="flicker-fast">Arcade</span>
            </h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default header;
