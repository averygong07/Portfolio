import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/stars.svg";
import Particle from "../Particle";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Avery Gong</strong>
              </h1>

              <div className="heading-description" style={{ padding: "30px 0" }}>
                <h2 style={{ color: "rgb(155, 126, 172)", fontSize: "1.6em" }}>
                  Aspiring to revolutionize healthcare through AI
                </h2>
                <div style={{ padding: "20px 0", fontSize: "1.1em", lineHeight: "1.5em" }}>
                  <span className="purple">Machine Learning</span> • <span className="purple">Medical Imaging</span> • <span className="purple">Healthcare AI</span>
                </div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ 
                  maxHeight: "450px",
                  opacity: "0.9",
                  filter: "hue-rotate(45deg) brightness(1.1)"
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
