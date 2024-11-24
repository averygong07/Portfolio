import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import xray from "../../Assets/Projects/xray.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Pet Health Tracker"
              description="iOS application designed to help pet owners monitor and manage their pets' health records, medications, and appointments. Built with Swift and CoreData, featuring a user-friendly interface for tracking multiple pets."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Real-time Facial Emotion Recognition"
              description="Deep learning system that performs real-time facial emotion recognition using convolutional neural networks. Implemented with Python, TensorFlow, and OpenCV for live video analysis."
              ghLink="https://github.com/averygong07/realtime-fer-main"
              demoLink="https://github.gatech.edu/pages/xma335/CS6476_project/" // TODO: need to revise link to personal
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xray}
              isBlog={false}
              title="Covid-19 Chest X-Ray Detection"
              description="Explored Machine Learning models that analyzes chest X-rays to detect COVID-19 cases. Built using deep learning techniques with Python and PyTorch."
              demoLink="https://averygong07.github.io/covid19-detection-xray/"
              showGithub={false}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
