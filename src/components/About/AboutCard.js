import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm originally from China and moved to Montreal Canada in 2014, after which I have been kept moving!
            <br/><br/>
            I got my Bachelor's degree in Honour Economics and Finance (minor in Conputer Science) from <span className="purple">McGill University</span>, 
            and my Master's degree in Computer Science from <span className="purple">Washington University in St. Louis</span>.
            <br/><br/>
            After I graduated, I came back to Canada and worked for <span className="purple"> Verafin (acquired by Nasdaq) </span> in Toronto
            prior to moving to Vancouver and joining <span className="purple"> Amazon Web Service (AWS) </span>. 
            I joined <span className="purple"> PayPal </span> as <span className="purple"> Software Engineer III </span> in Oct 2021.
            <br/><br/>
            Please refer to my resume for more details of my background and experience.
            <br/><br/>
            Always wandering, everywhere I roam is home:)
          
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
