import "./MySkills.css";
import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

import { skills } from "./SkillsData";

export default function MySkill() {
  return (
    <div id="skills">
      <Container className="skills-container">
        <Row className="skills-header">
          <Col>TECH SKILLS</Col>
        </Row>
        <Row className="skills-body">
          <Col xl="6" md="6" xs="12">
            <Row>
              <Col>
                <Card className="skills-group">
                  <CardBody>
                    <CardTitle className="skills-group-header" tag="h5">
                      Frontend
                    </CardTitle>
                    <CardText className="skills-group-body">
                      {skills.frontend.map((skill, index) => (
                        <span className="skills-item" key={index}>
                          <a
                            className="skills-item-link"
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <CardImg
                              src={skill.imgSrc}
                              alt={skill.imgAltText}
                              rounded
                              className="skills-item-img"
                            ></CardImg>{" "}
                            {skill.skillName}
                          </a>
                        </span>
                      ))}
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="skills-group">
                  <CardBody>
                    <CardTitle className="skills-group-header" tag="h5">
                      Backend
                    </CardTitle>
                    <CardText className="skills-group-body">
                      {skills.backend.map((skill, index) => (
                        <span className="skills-item" key={index}>
                          <a
                            className="skills-item-link"
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <CardImg
                              src={skill.imgSrc}
                              alt={skill.imgAltText}
                              rounded
                              className="skills-item-img"
                            ></CardImg>{" "}
                            {skill.skillName}
                          </a>
                        </span>
                      ))}
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xl="6" md="6" xs="12">
            <Row>
              <Col>
                <Card className="skills-group">
                  <CardBody>
                    <CardTitle className="skills-group-header" tag="h5">
                      Programming Languages
                    </CardTitle>
                    <CardText className="skills-group-body">
                      {skills.programmingLanguages.map((skill, index) => (
                        <span className="skills-item" key={index}>
                          <a
                            className="skills-item-link"
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <CardImg
                              src={skill.imgSrc}
                              alt={skill.imgAltText}
                              rounded
                              className="skills-item-img"
                            ></CardImg>{" "}
                            {skill.skillName}
                          </a>
                        </span>
                      ))}
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="skills-group">
                  <CardBody>
                    <CardTitle className="skills-group-header" tag="h5">
                      Version Control
                    </CardTitle>
                    <CardText className="skills-group-body">
                      {skills.versionControl.map((skill, index) => (
                        <span className="skills-item" key={index}>
                          <a
                            className="skills-item-link"
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <CardImg
                              src={skill.imgSrc}
                              alt={skill.imgAltText}
                              rounded
                              className="skills-item-img"
                            ></CardImg>{" "}
                            {skill.skillName}
                          </a>
                        </span>
                      ))}
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
