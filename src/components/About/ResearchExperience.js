import React from "react";
import { Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";

function ResearchExperience() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={4}>
        <ExperienceCard
          title="Graduate Research Assistant"
          company="AIMP Lab, Northwestern University (Remote)"
          date="May 2024 - Present"
          description={[
            "Developing deep learning methods for PET image reconstruction using a novel scanner geometry",
            "Creating PET simulations using GATE software to validate and optimize new scanner design",
            "Investigating the potential of AI-based sparse-view reconstruction to reduce scanning time and radiation exposure",
          ]}
          fullDescription={[
            "Developing deep learning methods for reconstructing PET images using a novel scanner geometry",
            "Creating PET simulations using GATE software to validate and optimize new scanner design",
            "Investigating the potential of AI-based sparse-view reconstruction to reduce scanning time and radiation exposure",
            "Exploring different medical image reconstruction algorithms and softwares",
          ]}
        />
      </Col>
      <Col md={4}>
        <ExperienceCard
          title="Graduate Research Assistant"
          company="Sonification Lab, Georgia Tech"
          date="Aug 2023 - Dec 2024"
          description={[
            "Lead a Human-AI Interaction project on robot guide dogs for BVI people",
            "Conducted need-finding processes and requirement gathering",
            "Designed and evaluated multi-modal prototypes with BVI participants",
            "Currently developing a voice conversational AI interface for the robot dog"
          ]}
          fullDescription={[
            "Lead a Human-AI Interaction project on investigating preferences of blind and visually impaired (BVI) people on the aesthetic and functional factors of a robot guide dog",
            "Planned and conducted need-finding processes to gather requirements of robot dog prototype",
            "Designed multi-modal prototypes and evaluated with BVI participants through focus groups",
            "Project was awarded Research and Engagement Grant by IPaT at Georgia Tech",
            "Currently developing a voice conversational AI interface for the robot dog"
          ]}
        />
      </Col>
      <Col md={4}>
        <ExperienceCard
          title="Research Assistant"
          company="Egan Lab, SickKids Hospital"
          date="Sep 2018 - Apr 2019"
          description={[
            "Analyzed molecular subtypes of breast cancer using genomic and clinical data",
            "Developed computational methods in Pythonto identify genotype-phenotype correlations",
            "Investigated genetic and demographic factors associated with treatment responses",
          ]}
          fullDescription={[
            "Led data analysis to identify distinct molecular subtypes of breast cancer through comprehensive genomic profiling",
            "Developed and implemented computational methods to correlate genetic markers with clinical outcomes",
            "Investigated relationships between genetic variations and treatment responses",
            "Contributed to research aimed at developing more personalized treatment approaches"
          ]}
        />
      </Col>
      <Col md={4}>
        <ExperienceCard
          title="Software Developer"
          company="University of Toronto"
          date="May 2022 - Aug 2022"
          description={[
            "Built full-stack web applications using React and Django",
            "Implemented user authentication and authorization",
            "Developed automated deployment pipelines"
          ]}
        />
      </Col>
    </Row>
  );
}

export default ResearchExperience;
