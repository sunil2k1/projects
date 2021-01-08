import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/logow.png";
import "./my-navbar.styles.css";
import projects from "../../assets/project.svg"
const MyNavbar = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="/home">        
            <Navbar.Collapse id="basic-navbar-nav">
                 <img className="logo" src={Logo} alt="" />
                  <Nav.Link href="/home"><span className ="fa fa-home fa-lg"></span> Home</Nav.Link>
                  <Nav.Link href="/home#about"><span className ="fa fa-info fa-lg"></span> About Me</Nav.Link>
                  <Nav.Link href="/Projects"><img className="logos" src={projects}/>Projects</Nav.Link>        
              </Navbar.Collapse>  
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">            
             <Nav.Link href="/skills">Skills</Nav.Link>
              <Nav.Link href="/skills#experience">Experience</Nav.Link>
              <div>
                    <a href="https://drive.google.com/file/d/1xi9HnXnFqgH3IygtzbuYnOx1l-ZXM2hY/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                       Resume
                      </Button>
                    </a>
                  </div>     
              
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
