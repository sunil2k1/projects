import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/sunil.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Flip from 'react-reveal/Flip';
import Tilt from 'react-tilt';
import HeadShake from 'react-reveal/HeadShake';

const About = () => {
  return (
    <div id="about">
      <div className="about">
      <br />
      <br />
      <br />
        <h1 className="aboutme">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
              <HeadShake>
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                </HeadShake>
              </Row>
            </Col>
            <Col xs={12} md={6}>
            <Tilt > 
              <Row className=" align-items-start p-2 my-details rounded">        
              <Flip left cascade>
                Hi there! I am <strong>&nbsp;Sunil Kumar G</strong>
                 A passionate programmer , born and brought up in India. I'm a <span></span>Full Stack Web Developer with React.js, Node.js as my tech stack.<br /> I am a Android App Developer.
                 I'm Certified as RedHat System  <span></span>Administrator in 20th August 2019.I'm completed Cambridge <span></span> Assessment Business Preliminary in June 2019.And I'm Pandit by <span></span>completing All Eight Levels in Dhakshin Bharath Hindi Prachar <span></span> Sabha
                 Exams in 2017.
                 <br />
                 I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                </Flip>
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="https://drive.google.com/file/d/1xi9HnXnFqgH3IygtzbuYnOx1l-ZXM2hY/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/sunil2k1" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-warning">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/sunil-kumar-671a801a4/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
              </Tilt>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
