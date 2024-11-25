import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import xray from "../../Assets/Projects/xray.png";
import pet from "../../Assets/Projects/pet.png";
import segmentation from "../../Assets/Projects/segmentation.png";
import TA from "../../Assets/Projects/TA.png";

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
              imgPath={pet}
              title="Pet Health Tracker"
              description="iOS application designed to help pet owners monitor and manage their pets' health records, medications, and appointments. Built with Swift and CoreData, featuring a user-friendly interface for tracking multiple pets."
              ghLink="https://github.com/AveryGong515/Pet-Health-Tracker.git"
              demoLink="https://youtu.be/_Dy9zVYdlhs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="Real-time Facial Emotion Recognition"
              description="Deep learning system that performs real-time facial emotion recognition using convolutional neural networks. Implemented with Python, TensorFlow, and OpenCV for live video analysis."
              demoLink="https://averygong07.github.io/realtime-fer-main/"
              ghLink="https://github.com/averygong07/realtime-fer-main.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xray}
              title="Covid-19 Chest X-Ray Detection"
              description="Explored Machine Learning models that analyzes chest X-rays to detect COVID-19 cases. Built using deep learning techniques with Python and PyTorch."
              demoLink="https://averygong07.github.io/covid19-detection-xray/"
              showGithub={false}
            />
          </Col>
        </Row>

        <h1 className="project-heading" style={{ paddingTop: "50px" }}>
          Coming <strong className="purple">Soon </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={segmentation}
              title="Deep Learning for 3D MRI Brain Tumor Segmentation"
              description="Developing an advanced deep learning model for accurate segmentation of brain tumors in 3D MRI scans. Implementing state-of-the-art architectures and techniques to improve medical image analysis."
              showGithub={false}
              comingSoon={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TA}
              title="Conversational AI as CS8803CAI Tutor"
              description="Building an intelligent tutoring system using Large Language Models to assist students in the CS8803CAI course. Focusing on personalized learning experiences and interactive problem-solving guidance."
              showGithub={false}
              comingSoon={true}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
