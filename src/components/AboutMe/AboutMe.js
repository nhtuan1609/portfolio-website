import "./AboutMe.css";
import React from "react";
import { Container, Row, Col } from "reactstrap";

import Avatar from "../../assets/img/profile/avatar.JPG";

export default function AboutMe() {
  return (
    <div id="about">
      <Container className="about-container">
        <Row className="about-header">
          <Col>ABOUT ME</Col>
        </Row>
        <Row className="about-body">
          <Col className="about-avatar" xl="6" md="6" xs="12">
            <img className="about-avatar-img" src={Avatar} alt="Error"></img>
          </Col>
          <Col className="about-infor" xl="6" md="6" xs="12">
            <div className="about-infor-text">
              Hi there! I am <strong>&nbsp;Nguyen Hoang Tuan</strong>.
              <br />I was born and brought up in Can Tho city. I am a Frontend
              Web Developer with HTML, CSS, Javascript and React.js as my tech
              stack.
              <br />
              In 2020, I successfully completed my Engineering with
              specialization in Control and Automation Engineer.
              <br />
              Working with the clients, my goal is always driven towards
              providing amazing experience with the best level of quality and
              service to them.
              <br />I love learning about new technologies, what problems are
              they solving and how can I use them to build better and scalable
              products.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
