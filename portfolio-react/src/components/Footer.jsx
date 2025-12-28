import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      link: 'https://github.com/faridhrizaldy',
      name: 'GitHub'
    },
    { 
      icon: <FaLinkedin />, 
      link: 'https://www.linkedin.com/in/muhammad-faridh-rizaldy-118926245/',
      name: 'LinkedIn'
    },
    { 
      icon: <FaInstagram />, 
      link: 'https://www.instagram.com/faridh_rizaldy/',
      name: 'Instagram'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              <span className="logo-text">Faridh</span>
              <span className="logo-dot">.</span>
            </h3>
            <p className="footer-description">
              Front-End Developer passionate about creating 
              beautiful and functional web experiences.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href.substring(1));
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-contact">
              <li>Email: faridrizaldy@gmail.com</li>
              <li>Phone: +62 8820 XXXX XXXX</li>
              <li>Location: Bandung, Indonesia</li>
              <li className="availability">
                <span className="status-dot"></span>
                Available for freelance
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Faridh Rizaldy. All rights reserved.
          </p>
          <p className="made-with">
            Made with <FaHeart className="heart-icon" /> using React.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
