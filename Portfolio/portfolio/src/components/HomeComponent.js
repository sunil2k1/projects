import React from "react";
import MyCarousal from "./my-carousal/my-carousal.component";
import TitleMessage from "./title-message/title-message.component";
import About from "../pages/about/about.component"
import { Parallax } from "react-parallax";
import Particles from "react-particles-js";
import { particlesOptions } from "../particlesOptions";
import Fade from "react-reveal/Fade";

const Home= () => {
    return (
      <div>
      <MyCarousal />
      <TitleMessage />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      /> 
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("../assets/img/parallex/background.webp")}
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
      </div>
    );
  };
  
  export default Home;