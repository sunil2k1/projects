import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";  
import Tilt from 'react-tilt';
import Flip from 'react-reveal/Flip';
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <Container>
        <br />
        <br />
        <br />
        <br />
        <Tilt>
        <Card className="Exp">
        <Flip left cascade>
          <Card.Header className=" justify-content-center dark">
          <h1 className="text-center">EXPERIENCE</h1>
          </Card.Header>
        <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Full Stack Developer</strong>
                    <br />
                    <strong>Technology:</strong> React JS,Node Js,HTML5,CSS3,MS-SQL
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                        <h3>Android App Development</h3>
                        <li>Creating different Android App Using Android Studio.And I created BMI cal and Wanders App</li>
                       <h3>Static Web Design</h3>
                      <li>Create different Static website from sratch with HTML, CSS ,JavaScript and I created Board using HTML, CSS ,JavaScript</li>
                      <h3>Dynamic Web Design</h3>
                      <li>Create dynamic websites using Reactjs, Nodejs. and I created HotelInfo (All Details Of a Particular Hotel),My Portfolio</li>

                    </ul>                 
                  </Card.Text>
                </div>
              </Card.Body>
              </Flip>
        </Card>
        </Tilt>
        <br />
        <br />
      </Container>
    </div>
  );
};

export default Experience;
