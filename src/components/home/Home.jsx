import React from 'react';
import profileImg from '../../assets/wills.JPG';
import { Link } from 'react-scroll';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import CV from '../../assets/IWEBEMA Williams_ Data Analyst CV.pdf';
import './home.css';

const Home = () => {
  const openPdfInNewTab = () => {
    window.open(CV, '_blank');
  };
  return (
    <section className='home' id='home'>
      <div className='home__wrapper'>
        <div className='home__container container'>
          <h1 className='home__title text-cs'>
            <span>Williams</span> Iwebema
          </h1>
          <p className='home__job'>
            <b>Data Analyst </b>
          </p>

          <div className='home__img-wrapper'>
            <div className='home__banner'>
              <img
                src={profileImg}
                alt=''
                className='home__profile'
                style={{ marginLeft: '50px' }}
              />
            </div>

            <p className='home__data home__data-one'>
              <span className='text-lg'>
                2 <b>+</b>
              </span>

              <span className='text-sm text-cs'>
                Years of combined <span>Experience</span>
              </span>
            </p>

            <p className='home__data home__data-two'>
              <span className='text-lg'>
                20 <b>+</b>
              </span>

              <span className='text-sm text-cs'>
                Completed <span>Projects</span>
              </span>
            </p>
          </div>

          <p className='home__text'>
          A motivated and highly skilled Data Analyst and Environmental Scientist with years of experience in analyzing data. I am able to perform statistical analysis, hypothesis testing on your product. I have a strong proficiency in statistical analysis, modeling, and data visualization using software such as SQL, Python, Excel, and Tableau to develop data-driven solutions to complex problems.

          </p>

          <div className='home__socials'>
            <a
              href='http://linkedin.com/in/nathaniel-obafemi/'
              target='blank'
              className='home__social-link'
            >
              <FaLinkedinIn />
            </a>

            <a
              href='https://github.com/Kunathly10'
              target='blank'
              className='home__social-link'
            >
              <FaGithubAlt />
            </a>
          </div>

          <div className='home__btns'>
            <button onClick={openPdfInNewTab} className='btn text-cs'>
              VIEW CV
            </button>
            <Link
              className='hero__link text-cs'
              to='skills'
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

        <div className='section__deco deco__left'></div>
      </div>

      <div className='section__bg-wrapper'>
        <span className='bg__title'>Data Analyst</span>
      </div>
    </section>
  );
};

export default Home;
