import VisibilityIcon from "@material-ui/icons/Visibility";
import React from "react";
import { Link as LinkScroll } from "react-scroll";
import Typist from "react-text-typist";
import "./heroSection.css";
import ParticlesComponent from './ParticlesComponent';


const HeroSection = () => {
  return (
    <div className="hero" id="hero" particles={<ParticlesComponent />}>
      <div className="hero-content">
        <h1>
          Hello 👋 My name is Eunice Abieyuwa Igbinedion
          <Typist
            sentences=""
            cursorColor={"#ff7f50;"}
            typingSpeed={120}
            loop={false}
          />
        </h1>
        <p>
          <span className="hero-colorText">
            ✨I turn raw data into actionable insights✨
            
            <br className='click-text' />
            ✨✨ click the link below to!!✨✨
            <br />
          </span>
         
          <LinkScroll
            className="hero-view"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-90}
            duration={700}
          >
            view portfolio
            <VisibilityIcon className="icon" />
          </LinkScroll>{" "}
        </p>
        <ParticlesComponent />
      </div>
    </div>
  );
};

export default HeroSection;
