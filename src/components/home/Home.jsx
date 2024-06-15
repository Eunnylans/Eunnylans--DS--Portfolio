import React from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";
import Profile from "../../assets/Eunic.jpg";
import CV from "../../assets/IWEBEMA Williams_ Data Analyst CV.pdf";
import "./home.css";

const Home = () => {
  const openPdfInNewTab = () => {
    window.open(CV, "_blank");
  };
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <h1 className="home__title text-cs">
            <span>Eunice</span> Igbinedion
          </h1>
          <p className="home__job">
            <b>Data Analyst / Business Analyst </b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img
                src={Profile}
                alt="Eunice Igbinedion"
                className="home__profile"
                style={{ marginLeft: "80px" }}
              />
            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">
                2 <b>+</b>
              </span>

              <span className="text-sm text-cs">
                Years of combined <span>Experience</span>
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">
                20 <b>+</b>
              </span>

              <span className="text-sm text-cs">
                Completed <span>Projects</span>
              </span>
            </p>
          </div>

          <p className="home__text">
            In today's data-driven world, making informed decisions is key to
            success. I am a seasoned Data Analyst with a passion for turning raw
            data into actionable insights. I empowers businesses to unlock their
            full potential. From streamlining operations to enhancing customer
            experiences, my data-driven strategies ensure you stay ahead of the
            curve.
          </p>

          <div className="home__socials">
            <a
              href="https://www.linkedin.com/in/euniceigbinedion/"
              target="blank"
              className="home__social-link"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/Eunnylans"
              target="blank"
              className="home__social-link"
            >
              <FaGithubAlt />
            </a>
          </div>

          <div className="home__btns">
            <button onClick={openPdfInNewTab} className="btn text-cs">
              VIEW CV
            </button>
            <Link
              className="hero__link text-cs"
              to="skills"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              My Skills
            </Link>
          </div>
        </div>

        <div className="section__deco deco__left"></div>
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Data Analyst</span>
      </div>
    </section>
  );
};

export default Home;
