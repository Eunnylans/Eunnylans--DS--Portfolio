import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { Link, animateScroll } from "react-scroll";
import { links } from "../../Data";
import "./header.css";



const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(getStorageTheme());
  const [scrollNav, setScrollNav] = useState(false);

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  return (
    <header className={`${scrollNav ? "scroll-header" : ""} header`}>
      <nav className="nav">
        <Link to="/" onClick={scrollTop} className="nav__logo text-cs">
          <b>Eunnylans</b>
        </Link>

        <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
          <div className="nav__data">
            <ul className="nav__list">
              {links.map(({ name, path }, index) => {
                return (
                  <li className="nav__item" key={index}>
                    <Link
                      className="nav__link text-cs"
                      to={path}
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-75}
                      duration={700}
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="header__socials">
              <a
                href="https://github.com/Eunnylans"
                target="blank"
                className="header__social-link"
              >
                <FaGithubAlt />
              </a>

              <a
                href="https://www.linkedin.com/in/euniceigbinedion/"
                target="blank"
                className="header__social-link"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="section__deco header__deco deco__left"></div>
        </div>

        <div className="nav__btns">
          <div className="theme__toggler" onClick={toggleTheme}>
            {theme === "light-theme" ? <BsMoon /> : <BsSun />}
          </div>

          <div
            className={`${
              showMenu ? "nav__toggle animate-toggle" : "nav__toggle"
            }`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
