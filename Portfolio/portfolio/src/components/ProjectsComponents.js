import React from "react";
import Container from "react-bootstrap/Container";
import Slide from "react-reveal/Slide";
import TimeLine from "./projects-timeline/projects-timeline.component";


const Skills= () => {
    return (
      <div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
    </div>
    );
  };
  
  export default Skills;