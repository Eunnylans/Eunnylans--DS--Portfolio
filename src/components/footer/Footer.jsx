import React from 'react';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container grid'>
        <div className='footer__socials'>
          <a
            href='https://github.com/williamsiwebema'
            target='blank'
            className='footer__social-link'
          >
            <FaGithubAlt />
          </a>

          <a
            href='http://www.linkedin.com/in/williamsiwebema'
            target='blank'
            className='footer__social-link'
          >
            <FaLinkedinIn />
          </a>
        </div>

        <p className='footer__copyright text-cs'>
          &copy; 2023 <span>Gola</span>. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
