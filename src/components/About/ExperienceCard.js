import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWorkAlt } from "react-icons/cg";
import { BsCalendarFill } from "react-icons/bs";

function ExperienceCard(props) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="experience-card-view" style={{ marginBottom: "20px" }}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <Card.Title style={{ fontSize: "1.2em", fontWeight: "600" }}>
              {props.title}
            </Card.Title>
            <div className="mb-2" style={{ color: "var(--text-secondary)" }}>
              <CgWorkAlt style={{ marginRight: "5px" }} />
              {props.company}
            </div>
            <div className="mb-3" style={{ color: "var(--text-secondary)" }}>
              <BsCalendarFill style={{ marginRight: "5px" }} />
              {props.date}
            </div>
          </div>
        </div>

        <ul style={{ marginBottom: expanded ? "20px" : "0" }}>
          {(expanded ? props.fullDescription : props.description).map((point, index) => (
            <li key={index} style={{ marginBottom: "8px" }}>{point}</li>
          ))}
        </ul>

        {props.fullDescription && props.fullDescription.length > props.description.length && (
          <Button
            variant="link"
            onClick={toggleExpanded}
            className="p-0"
            style={{ color: "var(--text-link)" }}
          >
            {expanded ? "Show Less" : "Show More"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
