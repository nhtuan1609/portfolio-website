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
                  Front-End Web Development Course
                </div>
                <div className="experience-item-body">
                  <h1>Status: Completed</h1>
                  <strong>Teachnology:</strong> HTML, CSS, JavaScript and
                  React.js.
                  <br />
                  <strong>Duration:</strong> October 2020 - April 2021.
                  <br />
                  <strong>Description:</strong>
                  <br />
                  - Build a front-end website and responsive web design using HTML and CSS.
                  <br />
                  - Implement a functional front-end website using React.
                  <br />
                  - Consume API RESTful in React.
                  <br />
                  - Design the architecture for the website using React and Redux.
                </div>
              </div>
            </Tilt>
            <Tilt options={{ max: 10, scale: 1.05 }}>
              <div className="experience-item">
                <div className="experience-item-header">
                  Emage Development Co., Ltd
                </div>
                <div className="experience-item-body">
                  <h1>Position: Application Engineer</h1>
                  <strong>Teachnology:</strong> MFC, C++ and Python.
                  <br />
                  <strong>Duration:</strong> March 2020 - May 2021.
                  <br />
                  <strong>Description:</strong>
                  <br />
                  - Develop and enhance multiple UI features  using MFC and C++.
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
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}
