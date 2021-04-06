import "./MyProjects.css";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import { Accordion, Card, Image } from "react-bootstrap";

// projects
import L_ReactToDoList from "../../assets/img/projects/React_ToDo_List.webp";
import L_MernTipCalc from "../../assets/img/projects/mern_tip_calc.webp";
import L_GetGitHubInfo from "../../assets/img/projects/get_github_info.webp";
import L_SmartBrain from "../../assets/img/projects/brain.webp";
import L_RoboFriends from "../../assets/img/projects/Robofriends.webp";
import L_ProductHuntClone from "../../assets/img/projects/product_hunt_clone.webp";
import L_PortfolioUsingDjango from "../../assets/img/projects/portfolioUsingDjango.webp";
import L_todo_list from "../../assets/img/projects/todo_list.webp";
import L_demo_router from "../../assets/img/projects/demo_router.webp";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";

export default function MyProjects() {
  return (
    <div id="projects">
      <Container className="projects-container">
        <Row className="projects-header">
          <Col>PROJECTS</Col>
        </Row>
        <Row className="projects-body">
          <Col className="projects-list">
            <Timeline className="projects-item">
              <Events>
                <ImageEvent
                  className="text-center"
                  date="20/02/2021"
                  text="React Todo App"
                  src={L_todo_list}
                  alt="React Todo App"
                  fontSize="120px"
                >
                  <div className="projects-item-container">
                    <div>
                      <Accordion>
                        <Card>
                          <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="item-togle-btn"
                          >
                            Project Details
                          </Accordion.Toggle>

                          <Accordion.Collapse
                            eventKey="0"
                            className="item-collapse"
                          >
                            <Card.Body className="item-collapse-body">
                              <strong>Description:</strong> This is a Todo App
                              created with React and Material UI that keeps a
                              track of your Todos.
                              <hr />
                              <strong>Features:</strong>
                              <ul>
                                <li>Keeps track of your Todos.</li>
                                <li>Powered by React and Material UI.</li>
                                <li>Respoisive Design.</li>
                              </ul>
                              <hr />
                              <strong>Tech used:</strong>
                              <Container>
                                <Row className="collapse-body-list">
                                  <Col
                                    className="collapse-body-list-item"
                                    xl="6"
                                    md="12"
                                    xs="12"
                                  >
                                    <span>
                                      <Image
                                        src={L_HTML5}
                                        alt="HTML5"
                                        rounded
                                        className="collapse-body-img"
                                      ></Image>{" "}
                                      HTML5
                                    </span>
                                  </Col>
                                  <Col
                                    className="collapse-body-list-item"
                                    xl="6"
                                    md="12"
                                    xs="12"
                                  >
                                    <span>
                                      <Image
                                        src={L_CSS3}
                                        alt="CSS 3"
                                        rounded
                                        className="collapse-body-img"
                                      ></Image>{" "}
                                      CSS3
                                    </span>
                                  </Col>
                                  <Col
                                    className="collapse-body-list-item"
                                    xl="6"
                                    md="12"
                                    xs="12"
                                  >
                                    <span>
                                      <Image
                                        src={L_REACT}
                                        alt="React"
                                        rounded
                                        className="collapse-body-img"
                                      ></Image>{" "}
                                      React
                                    </span>
                                  </Col>
                                  <Col
                                    className="collapse-body-list-item"
                                    xl="6"
                                    md="12"
                                    xs="12"
                                  >
                                    <span>
                                      <Image
                                        src={L_MATERIALUI}
                                        alt="Material-UI"
                                        rounded
                                        className="collapse-body-img"
                                      ></Image>{" "}
                                      Material-UI
                                    </span>
                                  </Col>
                                </Row>
                              </Container>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </div>
                    <div className="projects-item-footer">
                      <UrlButton
                        className="btn-source-code"
                        href="https://codesandbox.io/s/todolist-jw615"
                        target="_blank"
                      >
                        Source Code
                      </UrlButton>
                      <UrlButton
                        className="btn-see-live"
                        href="https://jw615.csb.app/"
                        target="_blank"
                      >
                        See Live
                      </UrlButton>
                    </div>
                  </div>
                </ImageEvent>
                <ImageEvent
                  className="text-center"
                  date="28/03/2021"
                  text="Demo Router App"
                  src={L_demo_router}
                  alt="Demo Router App"
                  fontSize="120px"
                >
                  <div className="projects-item-container">
                    <div>
                      <Accordion>
                        <Card>
                          <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="item-togle-btn"
                          >
                            Project Details
                          </Accordion.Toggle>

                          <Accordion.Collapse
                            eventKey="0"
                            className="item-collapse"
                          >
                            <Card.Body className="item-collapse-body">
                              <strong>Description:</strong> This is a Demo
                              Router App created with React and used Axios to
                              get data from Server.
                              <hr />
                              <strong>Features:</strong>
                              <ul>
                                <li>Multiple pages using Router.</li>
                                <li>Get data from Server.</li>
                                <li>Apply React State.</li>
                              </ul>
                              <hr />
                              <strong>Tech used:</strong>
                              <Container>
                                <Row className="collapse-body-list">
                                  <Col
                                    className="collapse-body-list-item"
                                    xl="6"
                                    md="12"
                                    xs="12"
                                  >
                                    <span>
                                      <Image
                                        src={L_HTML5}
                                        alt="HTML5"
                                        rounded
                                        className="collapse-body-img"
                                      ></Image>{" "}
                                      HTML5
                                    </span>
                                  </Col>
                                  <Col
                                    className="collapse-body-list-item"
                                    xl="6"
                                    md="12"
                                    xs="12"
                                  >
                                    <span>
                                      <Image
                                        src={L_CSS3}
                                        alt="CSS 3"
                                        rounded
                                        className="collapse-body-img"
                                      ></Image>{" "}
                                      CSS3
                                    </span>
                                  </Col>
                                  <Col
                                    className="collapse-body-list-item"
                                    xl="6"
                                    md="12"
                                    xs="12"
                                  >
                                    <span>
                                      <Image
                                        src={L_REACT}
                                        alt="React"
                                        rounded
                                        className="collapse-body-img"
                                      ></Image>{" "}
                                      React
                                    </span>
                                  </Col>
                                  <Col
                                    className="collapse-body-list-item"
                                    xl="6"
                                    md="12"
                                    xs="12"
                                  >
                                    <span>
                                      <Image
                                        src={L_MATERIALUI}
                                        alt="Material-UI"
                                        rounded
                                        className="collapse-body-img"
                                      ></Image>{" "}
                                      Material-UI
                                    </span>
                                  </Col>
                                </Row>
                              </Container>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </div>
                    <div className="projects-item-footer">
                      <UrlButton
                        className="btn-source-code"
                        href="https://codesandbox.io/s/demorouter-89c0g"
                        target="_blank"
                      >
                        Source Code
                      </UrlButton>
                      <UrlButton
                        className="btn-see-live"
                        href="https://89c0g.csb.app/"
                        target="_blank"
                      >
                        See Live
                      </UrlButton>
                    </div>
                  </div>
                </ImageEvent>
              </Events>
            </Timeline>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
