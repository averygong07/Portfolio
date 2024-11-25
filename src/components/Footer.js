import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-copywright" style={{ textAlign: "center" }}>
          <h3>Copyright {year}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
