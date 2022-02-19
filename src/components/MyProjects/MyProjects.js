import "./MyProjects.css";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import { Accordion, Card, Image } from "react-bootstrap";

// projects
import L_monotasking from "../../assets/img/projects/monotasking.jpg";
import L_movie_ticket from "../../assets/img/projects/movie_ticket.jpg";
import L_music_player from "../../assets/img/projects/music_player.jpg";
import L_todo_list from "../../assets/img/projects/todo_list.jpg";
import L_shopee_homepage from "../../assets/img/projects/shopee_homepage.jpg";
import L_w3_band from "../../assets/img/projects/w3_band.jpg";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_JAVASCRIPT from "../../assets/img/skills/logo-javascript.svg";
import L_NUXTJS from "../../assets/img/skills/nuxtjs.svg";
import L_FIREBASE from "../../assets/img/skills/firebase.svg";
import L_VUETIFY from "../../assets/img/skills/vuetify.svg";

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
                {/* monotasking */}
                <ImageEvent
                  className="text-center"
                  date="08/01/2022"
                  text="Monotasking"
                  src={L_monotasking}
                  alt="Monotasking"
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
                              <strong>Description:</strong> Manage your team's
                              work, projects and task online.
                              <hr />
                              <strong>Features:</strong>
                              <ul>
                                <li>
                                  Manage your tasks based on workspace and
                                  project separately. Easily to track progress
                                  of task and project.
                                </li>
                                <li>
                                  <strong>List view: </strong>Organize and
                                  assign tasks. With lists, teams see
                                  immediately what they need to do, which tasks
                                  are a priority, and when work is due.
                                </li>
                                <li>
                                  <strong>Timeline: </strong>See how work maps
                                  out over time. Manage dependent, overlapping,
                                  and unscheduled tasks—and create plans your
                                  team can count on.
                                </li>
                                <li>
                                  <strong>Boards: </strong>Make it easy for your
                                  team to focus on tasks currently at hand.
                                  Define each stage of work to see what’s
                                  important and where things are getting stuck.
                                </li>
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
                                        src={L_NUXTJS}
                                        alt="HTML5"
                                        rounded
                                        className="collapse-body-img"
                                      ></Image>{" "}
                                      NuxtJs
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
                                        src={L_VUETIFY}
                                        alt="CSS 3"
                                        rounded
                                        className="collapse-body-img"
                                      ></Image>{" "}
                                      Vuetify
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
                                        src={L_FIREBASE}
                                        alt="React"
                                        rounded
                                        className="collapse-body-img"
                                      ></Image>{" "}
                                      Firebase
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
                        href="https://github.com/nhtuan1609/monotasking"
                        target="_blank"
                      >
                        Source Code
                      </UrlButton>
                      <UrlButton
                        className="btn-see-live"
                        href="https://monotasking.vercel.app/"
                        target="_blank"
                      >
                        Website Demo
                      </UrlButton>
                    </div>
                  </div>
                </ImageEvent>
                {/* movie-ticket */}
                <ImageEvent
                  className="text-center"
                  date="12/05/2021"
                  text="Movie Ticket"
                  src={L_movie_ticket}
                  alt="Movie Ticket"
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
                              <strong>Description:</strong> This is a Movie
                              Ticket app created by Reactjs and Redux.
                              <hr />
                              <strong>Features:</strong>
                              <ul>
                                <li>
                                  Design frontend website by using function
                                  components.
                                </li>
                                <li>
                                  Consume RESTful API in React with Redux.
                                </li>
                                <li>
                                  Layout and Responsive web design with
                                  Material-UI.
                                </li>
                                <li>
                                  Template configuration with React Router.
                                </li>
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
                                        src={L_JAVASCRIPT}
                                        alt="React"
                                        rounded
                                        className="collapse-body-img"
                                      ></Image>{" "}
                                      JavaScript
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
                                        src={L_REDUX}
                                        alt="React"
                                        rounded
                                        className="collapse-body-img"
                                      ></Image>{" "}
                                      Redux
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
                                        alt="React"
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
                        href="https://github.com/nhtuan1609/movie_ticket"
                        target="_blank"
                      >
                        Source Code
                      </UrlButton>
                      <UrlButton
                        className="btn-see-live"
                        href="https://movie-ticket-alpha.vercel.app/"
                        target="_blank"
                      >
                        Website Demo
                      </UrlButton>
                    </div>
                  </div>
                </ImageEvent>
                {/* music-player */}
                <ImageEvent
                  className="text-center"
                  date="27/02/2021"
                  text="Music Player"
                  src={L_music_player}
                  alt="Music Player"
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
                              <strong>Description:</strong> This is a Music
                              Player app created with HTML, CSS and JavaScript.
                              <hr />
                              <strong>Features:</strong>
                              <ul>
                                <li>Play your favorite musics.</li>
                                <li>Handle event with JavaScript.</li>
                                <li>Responsive web design.</li>
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
                                        src={L_JAVASCRIPT}
                                        alt="React"
                                        rounded
                                        className="collapse-body-img"
                                      ></Image>{" "}
                                      JavaScript
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
                        href="https://github.com/nhtuan1609/music_player"
                        target="_blank"
                      >
                        Source Code
                      </UrlButton>
                      <UrlButton
                        className="btn-see-live"
                        href="https://music-player-sigma.vercel.app/"
                        target="_blank"
                      >
                        Website Demo
                      </UrlButton>
                    </div>
                  </div>
                </ImageEvent>
                {/* todo-list */}
                <ImageEvent
                  className="text-center"
                  date="20/02/2021"
                  text="Todo List"
                  src={L_todo_list}
                  alt="Todo List"
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
                                <li>Respoisive web design.</li>
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
                        href="https://github.com/nhtuan1609/todo_list"
                        target="_blank"
                      >
                        Source Code
                      </UrlButton>
                      <UrlButton
                        className="btn-see-live"
                        href="https://todo-list-two-pi.vercel.app/"
                        target="_blank"
                      >
                        Website Demo
                      </UrlButton>
                    </div>
                  </div>
                </ImageEvent>
                {/* shopee-homepage */}
                <ImageEvent
                  className="text-center"
                  date="10/02/2021"
                  text="Shopee Homepage"
                  src={L_shopee_homepage}
                  alt="Shopee Homepage"
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
                              <strong>Description:</strong> This is homepage of
                              Shopee which is created by using HTML and CSS.
                              <hr />
                              <strong>Features:</strong>
                              <ul>
                                <li>Responsive web design.</li>
                                <li>Layout website using HTML and CSS.</li>
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
                        href="https://github.com/nhtuan1609/shopee_homepage"
                        target="_blank"
                      >
                        Source Code
                      </UrlButton>
                      <UrlButton
                        className="btn-see-live"
                        href="https://shopee-homepage.vercel.app/"
                        target="_blank"
                      >
                        Website Demo
                      </UrlButton>
                    </div>
                  </div>
                </ImageEvent>
                {/* w3-band */}
                <ImageEvent
                  className="text-center"
                  date="28/01/2021"
                  text="W3 Band"
                  src={L_w3_band}
                  alt="W3 Band"
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
                              <strong>Description:</strong> This is one page
                              website W3 Band which is created by using HTML and
                              CSS.
                              <hr />
                              <strong>Features:</strong>
                              <ul>
                                <li>Responsive web design.</li>
                                <li>Layout website using HTML and CSS.</li>
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
                        href="https://github.com/nhtuan1609/w3_band"
                        target="_blank"
                      >
                        Source Code
                      </UrlButton>
                      <UrlButton
                        className="btn-see-live"
                        href="https://w3-band.vercel.app/"
                        target="_blank"
                      >
                        Website Demo
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
