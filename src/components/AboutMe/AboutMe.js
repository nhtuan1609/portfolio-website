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
              Hi there! <strong>Nguyen Hoang Tuan</strong> is my full name. I
              was born and brought up in Can Tho city. And now I work as an
              Application Developer.
              <br />
              <br />I completed my honor engineering degree with a focus in
              Control and Automation Engineer at the end of 2020. I got the
              first job while I was a senior in the university, and I have more
              than a year experience to develop the application using MFC and
              C++. After that, I worked for outsourcing company to develop the
              ERP web application using VueJs and Google Firestore for 6 months.
              <br />
              <br />I love learning about new technologies, facing problems and
              solving them, and how I can use them to create better and scalable
              products. I am looking for an environment where I can show all my
              technical skills.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
