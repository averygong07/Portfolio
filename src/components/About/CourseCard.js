import React from "react";
import Card from "react-bootstrap/Card";

function CourseCard({ title, description, term }) {
  return (
    <Card className="course-card">
      <Card.Body>
        <div className="course-content">
          <h3>{title}</h3>
          <p className="course-term">{term}</p>
          <p className="course-description">{description}</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;
