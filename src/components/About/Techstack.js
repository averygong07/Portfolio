import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiJava,
  DiReact,
  DiGit,
} from "react-icons/di";
import {
  SiC,
  SiSwift,
  SiTensorflow,
  SiPytorch,
  SiMysql,
  SiApachespark,
} from "react-icons/si";

function TechIcon({ icon: Icon, name }) {
  return (
    <Col xs={4} md={2} className="tech-icons">
      <div className="tech-icon-container">
        <Icon />
        <p className="tech-icon-name">{name}</p>
      </div>
    </Col>
  );
}

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <TechIcon icon={DiPython} name="Python" />
      <TechIcon icon={SiC} name="C" />
      <TechIcon icon={DiJava} name="Java" />
      <TechIcon icon={DiReact} name="React" />
      <TechIcon icon={SiSwift} name="Swift" />
      <TechIcon icon={SiTensorflow} name="TensorFlow" />
      <TechIcon icon={SiPytorch} name="PyTorch" />
      <TechIcon icon={SiMysql} name="SQL" />
      <TechIcon icon={DiGit} name="Git" />
      <TechIcon icon={SiApachespark} name="PySpark" />
    </Row>
  );
}

export default Techstack;
