import "./MyExperience.css";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Tilt from "react-tilt";

export default function MyExperience() {
  return (
    <div id="experience">
      <Container className="experience-container">
        <Row className="experience-header">
          <Col>EXPERIENCE</Col>
        </Row>
        <Row className="experience-body">
          <Col className="experience-list">
            <Tilt options={{ max: 10, scale: 1.05 }}>
              <div className="experience-item">
                <div className="experience-item-header">
                  Emage Development Co., Ltd
                </div>
                <div className="experience-item-body">
                  <h1>Position: Software Engineer</h1>
                  <strong>Teachnology:</strong> MFC, C++ and Python.
                  <br />
                  <strong>Duration:</strong> March 2020 - June 2021.
                  <br />
                  <strong>Description:</strong>
                  <br />
                  - Developed & enhanced multiple features with customizability
                  option across window application using MFC and C++.
                  <br />
                  - Provided application maintenance while working as Production
                  Support.
                  <br />- Research and implement new image processing algorithom
                  to the application.
                  <br />- Integrate deep learning method into the application
                  using CMD or TCP.
                </div>
              </div>
            </Tilt>
            <Tilt options={{ max: 10, scale: 1.05 }}>
              <div className="experience-item">
                <div className="experience-item-header">
                  Front-End Web Development Coruse
                </div>
                <div className="experience-item-body">
                  <h1>Status: Completed</h1>
                  <strong>Teachnology:</strong> HTML, CSS, Javascript and
                  React.js.
                  <br />
                  <strong>Duration:</strong> Janurary 2021 - June 2021.
                  <br />
                  <strong>Description:</strong>
                  <br />
                  - HTML building the code for websites.
                  <br />
                  - CSS for presentation.
                  <br />- JavaScript Fundamentals and JavaScript Document Object
                  Model.
                  <br />- Familiar with React.js, Bootstrap and Git.
                </div>
              </div>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
