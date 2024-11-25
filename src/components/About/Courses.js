import React from "react";
import { Row, Col } from "react-bootstrap";
import CourseCard from "./CourseCard";

function Courses() {
  const courses = [
    {
      title: "CS 7643: Deep Learning",
      description: "Advanced deep learning architectures, optimization techniques, and applications in computer vision and natural language processing.",
      term: "Fall 2023"
    },
    {
      title: "CS 8803: AI in Healthcare",
      description: "Applications of artificial intelligence in healthcare, focusing on medical imaging analysis, clinical decision support systems, and healthcare data analytics.",
      term: "Spring 2024"
    },
    {
      title: "CS 7641: Machine Learning",
      description: "Fundamental machine learning concepts, supervised and unsupervised learning, and practical applications in data science.",
      term: "Fall 2023"
    },
    {
      title: "CS 6601: Artificial Intelligence",
      description: "Core concepts in AI including search algorithms, knowledge representation, planning, and machine learning fundamentals.",
      term: "Spring 2024"
    },
    {
      title: "CS 6515: Intro to Graduate Algorithms",
      description: "Advanced algorithm design and analysis techniques, including dynamic programming, network flows, and NP-completeness.",
      term: "Fall 2023"
    },
    {
      title: "CS 8803: Interactive AI",
      description: "Human-AI interaction, conversational agents, and interactive machine learning systems.",
      term: "Spring 2024"
    }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {courses.map((course, index) => (
        <Col key={index} md={4} className="course-card-col">
          <CourseCard
            title={course.title}
            description={course.description}
            term={course.term}
          />
        </Col>
      ))}
    </Row>
  );
}

export default Courses;
