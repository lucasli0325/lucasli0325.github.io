import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { PROJECTS } from "../../Constants";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="purple"> Blogs </strong>
        </h1>
        <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
          {PROJECTS.map((project, index) => (
            <Col md={12} className="project-card" key={index}>
              <ProjectCard
                title={project.name}
                summary={project.summary}
                link={project.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
