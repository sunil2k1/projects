import './App.css';
import MyNavbar  from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";
import Skills from "./pages/skills/skills.component";
import Slide from "react-reveal/Slide";
import Experience from "./pages/experience/experience.component";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import Footer from "./components/footerComponent"


const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      /> 
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
              <Fade duration={500}>
                <About />
              </Fade>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
      <Footer />
    </div>
    
  );
}

export default App;
