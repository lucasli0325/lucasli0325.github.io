import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function WhyDidISwitchToTechIndustry() {
  return (
    <Container fluid className="blog-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} style={ {justifyContent: "center", paddingTop: "30px",}}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Why Did I Swith to Tech Industry</strong>
            </h1>
          </Col>
        </Row>

        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I used to be a business-majored student but end up being a software engineer after I graduate.            
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
          </p>
        </blockquote>

      </Container>
    </Container>
  );
}
export default WhyDidISwitchToTechIndustry;