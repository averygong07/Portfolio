import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar_new.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  const [showMore, setShowMore] = useState(false);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm <span className="purple">Avery Gong </span> from <span className="purple">Toronto, Canada</span>. I'm pursuing my MS in Computer Science at Georgia Tech, specializing in Machine Learning and Interactive Intelligence.
              <br />
              <br />
              {showMore ? (
                <>
                  My interdisciplinary background in computer science and health sciences has sparked my passion for leveraging AI to expeditely improve diagnosis and treatment of complex diseases.
                  <br />
                  <br />
                  I aspire to work towards&nbsp;
                  <i>
                    <b className="purple">developing deep learning models for medical imaging </b> and
                    <b className="purple"> creating impactful healthcare applications</b>
                  </i>
                  <br />
                  <br />
                  Currently, I'm focused on:
                  <ul style={{ listStyleType: "none", padding: "0" }}>
                    <li style={{ marginBottom: "10px" }}>
                      • Investigating and implementing deep learning models for medical imaging analysis
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      • Building user-friendly healthcare applications
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      • Researching AI applications in medical diagnosis
                    </li>
                  </ul>
                  <br />
                  Beyond academics, I'm an avid outdoor enthusiast who finds joy in&nbsp;
                  <span className="purple">hiking</span>,&nbsp;
                  <span className="purple">camping</span>, and&nbsp;
                  <span className="purple">tree-top trekking</span>. 
                  My love for nature extends to volunteering at animal shelters, where I help care for our furry friends.
                  <br />
                  <br />
                  In my quiet moments, I immerse myself in reading and creative writing, with a particular passion for&nbsp;
                  <span className="purple">science fiction</span>. These stories inspire me to imagine the possibilities of technology in shaping our future.
                </>
              ) : (
                <>
                  My interdisciplinary background in computer science and health sciences has sparked my passion for leveraging AI to expeditely improve diagnosis and treatment of complex diseases.
                  <br />
                  <br />
                  I aspire to work towards&nbsp;
                  <i>
                    <b className="purple">developing deep learning models for medical imaging </b> and
                    <b className="purple"> creating impactful healthcare applications</b>
                  </i>
                </>
              )}
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="show-more-btn"
                  aria-label={showMore ? "Show less" : "Show more"}
                >
                  {showMore ? "Show Less" : "Show More"}
                </button>
              </div>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
