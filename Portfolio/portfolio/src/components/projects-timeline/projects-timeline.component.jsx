import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import { FadeTransform } from 'react-animation-components';
// projects
import portfolio from "../../assets/img/projects/portfolio.png";
import wander from "../../assets/img/projects/wanders.jpg";
import bmical from "../../assets/img/projects/bmi.jpg";
import wordgame from "../../assets/img/projects/wordgame.png";
import boardgame from "../../assets/img/projects/boardgame.png";
import hotelinfo from "../../assets/img/projects/hotelinfo.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import REFERED_LINK from "../../assets/icons/akj.webp"
// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_STYLED_COMPONENTS from "../../assets/img/skills/styled-components.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import java from "../../assets/img/skills/typescript.svg";
import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <br />
      <br />
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        <ImageEvent
            date="09/01/2021"
            className="text-center"
            text="portfolio"
            src={portfolio}
            alt="portfolio"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>  This website is a My Portfolio Website
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>This website gives Details About Me</li>
                          <li>I Lists my Projects,Skills,Experience</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_ROUTER}
                                alt="React Router"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React Router
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_BOOTSTRAP}
                                alt="React Router"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_STYLED_COMPONENTS}
                                alt="Styled Components"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Styled Components
                            </span>
                          </li>
                        </ul>
                        <strong>Referred links:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <a href="https://github.com/akjha96/ReactifolioBs4_Akj">
                              <Image
                                src={REFERED_LINK}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>
                              ReactifolioBs4_Akj
                              </a>
                              
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/sunil2k1/projects/tree/main/Portfolio/portfolio" target="_blank">
                   View Source Code
                </UrlButton>
                <UrlButton
                  href="/home"
                  target="_blank"            >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            date="09/01/2021"
            className="text-center"
            text="HotelInfo"
            src={hotelinfo}
            alt="HotelInfo"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>  This website is developed using react by help of Front-End Web Development with React courese in Coursera
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>This Website gives detail about Hotel</li>
                          <li>Data is feed into the website using json server</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_ROUTER}
                                alt="React Router"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React Router
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_BOOTSTRAP}
                                alt="React Router"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="Styled Components"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                        </ul>
                        <strong>Referred links:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <a>
                             Front-End Web Development with React(Coursera)
                              </a>
                              
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/sunil2k1/projects/tree/main/HotelInfo%20(using%20Reactjs)/HotalInfo" target="_blank">
                   View Source Code
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        <ImageEvent
            date="03/05/2020"
            className="text-center"
            text="Wanders"
            src={wander}
            alt="Wanders"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Wanders App is Used to View All Tourist Place in India 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                        <li>Listing Top 5 Tourist Places in All States and Union Teritory in India</li>
                          <li>This App gives Histroy,Place Details,Location of All Tourist places in India</li>
                          <li>It gives a feeling by giving 4K images for all Places</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={java}
                                alt="Java"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Java
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/sunil2k1/projects/tree/main/Wanders%20(Tourism%20Guide%20)%20Android%20Mobile%20App/Wanders" target="_blank">
                   View Source Code
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        <ImageEvent
            date="27/02/2020"
            className="text-center"
            text="BMI cal"
            src={bmical}
            alt="BMI cal"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is my first Android App Project which is build using Java.It is used to calculate Body Mass Index(BMI) of a person
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Understand Android App Development</li>
                          <li>It is used to Calculate BMI</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={java}
                                alt="Java"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Java
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/sunil2k1/projects/tree/main/BMI%20Calculator%20Android%20APP/BMI%20cal" target="_blank">
                   View Source Code
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        <ImageEvent
            date="12/09/2019"
            className="text-center"
            text="Board Game"
            src={boardgame}
            alt="Board Game"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is Board Game,which is build using HTML5,CSS3 and javascript
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>To Learn About Html5,css3 and javascript</li>
                          <li>I gives basic knowledge about web development</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/sunil2k1/projects/tree/main/Board%20Game" target="_blank">
                   View Source Code
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* Project: Word Game */}
          <ImageEvent
            date="18/09/2019"
            className="text-center"
            text="Color Word Game"
            src={wordgame}
            alt="Color Word Game"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is my first Project,which is build using Python
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Understand Python learning Coding</li>
                          <li>To Gain Experience to do projects</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/sunil2k1/projects/tree/main/Colour%20word%20game%20coding" target="_blank">
                   View Source Code
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
