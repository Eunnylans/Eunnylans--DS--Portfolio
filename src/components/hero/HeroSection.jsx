import VisibilityIcon from "@material-ui/icons/Visibility";
import React from "react";
import { Link as LinkScroll } from "react-scroll";
import Typist from "react-text-typist";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero" id="hero">
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
            ✨I turn raw data into actionable insights.✨
          </span>
          &nbsp; <br />
          ✨✨ click the link below to!!✨✨
          <br />
          <LinkScroll
            className="hero-view"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            view portfolio
            <VisibilityIcon className="icon" />
          </LinkScroll>{" "}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
