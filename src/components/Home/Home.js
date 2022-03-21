import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/lucas.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <p className="heading-description blockquote">
                I'm
                <strong className="main-name"> Lucas Li (李屹宇) </strong>. 
                I'm currenlty a software engineer at PayPal based in Vancouver, Canada.
                I obtained my Bachelor's degree from McGill University in (Honour) Economics and Finance, 
                and my Master's degree from Washington University in St. Louis in Computer Science. 
                Always passionate about exploring the tech industry!
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
