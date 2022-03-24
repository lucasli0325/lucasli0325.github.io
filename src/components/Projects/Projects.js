import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { PROJECTS } from "../../Constants";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
        {/* <Switch>
            <Route path ="/blogs/WhyDidISwitchToTechIndustry" component={Blog1}/>
            <Route path ="/blogs/SystemDesignInterview" component={Blog2}/>
          </Switch> */}
      </Container>
    </Container>
  );
}

export default Projects;
