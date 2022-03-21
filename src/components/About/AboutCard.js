import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm originally from <span className="purple"> China</span> and moved to <span className="purple"> Montreal Canada </span> in 2014, after which I have been kept moving!
            <br/>
            I got my Bachelor's degree in Honour Economics and Finance (minor in Conputer Science) from <span className="purple">McGill University</span>, 
            and my Master's degree in Computer Science from <span className="purple">Washington University in St. Louis</span>.
            <br/>
            After I graduated, I came back to Canada and worked for <span className="purple"> Verafin (acquired by Nasdaq) </span> 
            and <span className="purple"> Amazon Web Service (AWS) </span> in Toronto prior to joining <span className="purple"> PayPal </span> in Vancouver.
            Please refer to my resume for more details of my background and experience.
            <br/>
            Always wandering, everywhere I roam is home:)
          
          </p>


          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> 2014 - 2017 <span className="purple"> McGill Universiy </span> 
              <p>Bachelor's Degree Honour Economics and Finance, minor in Computer Science </p>
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
