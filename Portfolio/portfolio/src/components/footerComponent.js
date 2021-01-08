import React from "react";
import GMail from "../assets/img/contact/mail.svg"
import LinkedIn from "../assets/img/contact/linkedin.svg"
import GitHub from "../assets/img/contact/github.svg"
import Insta from "../assets/img/contact/instagram.svg"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer(props) {
    return(
        <div className="footer">
        <Container>
          <br />
          <br />  
          <h3>For Contact</h3>
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div >
                <a href="mailto:sunilkpr2k1@gmail.com" target="_blank" rel="noopener noreferrer">
                  <img className="m-2 contact-img" src={GMail} alt="gamil" width="30px" height="30px"/>
                </a>
              </div>
              <div className="m-2">
                <a href="https://github.com/sunil2k1" target="_blank" rel="noopener noreferrer">
                <img className="contact-img" src={GitHub} alt="gamil" width="30px" height="30px"/>
                </a>
              </div>
              <div className="m-2">
                <a href="https://www.instagram.com/gsk_sunil007/" target="_blank" rel="noopener noreferrer">
                <img className="contact-img" src={Insta} alt="gamil" width="30px" height="30px"/>
                </a>
              </div>
              <div className="m-2">
                <a href="https://www.linkedin.com/in/sunil-kumar-671a801a4/" target="_blank" rel="noopener noreferrer">
                <img className="contact-img" src={LinkedIn} alt="gamil" width="30px" height="30px"/>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <br />
                    <br />
                    <p>© Developed By Sunil Kumar G | 2021</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;