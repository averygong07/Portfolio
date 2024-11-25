import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Avery Gong </span> from <span className="purple">Toronto, Canada</span>. I'm pursuing my MS in Computer Science at Georgia Tech, specializing in Machine Learning and Interactive Intelligence.
          </p>
          <p style={{ textAlign: "justify" }}>
            My interdisciplinary background in computer science and health sciences has sparked my passion for leveraging AI to expeditely improve diagnosis and treatment of complex diseases. I aspire to combine my hands-on experience in machine learning with full-stack development skills to create healthcare applications that are both powerful and accessible to medical professionals.
          </p>
          <p style={{ textAlign: "justify" }}>
            Currently, I'm working towards:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Investigating and implementing deep learning models for medical imaging analysis
            </li>
            <li className="about-activity">
              <ImPointRight /> Building user-friendly healthcare applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Researching AI applications in medical diagnosis
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "The best way to predict the future is to create it."
          </p>
          <footer className="blockquote-footer">Peter Drucker</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
