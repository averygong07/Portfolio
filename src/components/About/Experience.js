import React from "react";
import { Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={12}>
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
      <Col md={12}>
        <ExperienceCard
          title="Software Engineer Intern"
          company="F5 Inc. Seattle, WA"
          date="May 2024 - Aug 2024"
          description={[
            "Extended the NGINXaas for Azure (N4A) software backend data pipelining codebase using Golang",
            "Implemented a comprehensive, interactive dashboard using Python and Pyspark",
            "Optimized dashboard rendering by speeding up the query process by 5 times"
          ]}
          fullDescription={[
            "Extended the NGINXaas for Azure (N4A) software backend data pipelining codebase using Golang to send critical business metrics to a data aggregation system, enhancing data accuracy and reporting efficiency",
            "Implemented a comprehensive, interactive dashboard using Python and Pyspark for aggregating and visualizing important business metrics, aiding in data-driven decision making of the N4A team",
            "Optimized dashboard rendering by speeding up the query process by 5 times through the creation of an aggregated deployment statistics table, significantly improving performance and efficiency",
            "Migrated existing dashboard code to rely on newly optimized table, ensuring seamless integration and improved functionality",
            "Created tests in virtual testing environments to ensure functionality and reliability before deployment"
          ]}
        />
      </Col>
      <Col md={12}>
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
      <Col md={12}>
        <ExperienceCard
          title="Research Assistant"
          company="Egan Lab, SickKids Hospital"
          date="Sep 2018 - Apr 2019"
          description={[
            "Analyzed molecular subtypes of breast cancer using genomic and clinical data",
            "Developed computational methods in Python to identify genotype-phenotype correlations",
            "Investigated genetic and demographic factors associated with treatment responses"
          ]}
        />
      </Col>
    </Row>
  );
}

export default Experience;
