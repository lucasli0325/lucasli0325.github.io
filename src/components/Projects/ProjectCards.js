import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

function ProjectCards(props) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{textAlign: "center", fontWeight: "bold"}}>{props.title}</Card.Title>
        <Card.Text style={{textAlign: "center" }}>{props.summary}</Card.Text>
        <Button id = "blogButton" variant="primary" href={props.link} target="_self" className="download-button">
          {"View Full Blog"}
        </Button>
      </Card.Body>
    </Card>
  );
  
}
export default ProjectCards;
