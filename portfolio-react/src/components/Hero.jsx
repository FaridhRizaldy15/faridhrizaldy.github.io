import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text animate-fadeInUp">
            <h1 className="hero-greeting">ٱلسَّلَامُ عَلَيْكُمْ 👋</h1>
            <h2 className="hero-title">
              Saya <span className="gradient-text">Faridh Rizaldy</span>
            </h2>
            <h3 className="hero-subtitle">Front-End Developer</h3>
            <p className="hero-description">
              Seorang Front-End Developer yang passionate dalam menciptakan website
              yang interaktif, responsive, dan user-friendly. Berspesialisasi dalam
              React.js, JavaScript modern, dan UI/UX implementation.
            </p>

            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                Lihat Portfolio
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Hubungi Saya
              </button>
            </div>

            <div className="hero-social">
              <a 
                href="https://github.com/faridhrizaldy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/muhammad-faridh-rizaldy-118926245/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://www.instagram.com/faridh_rizaldy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaInstagram />
              </a>
              <a 
                href="mailto:faridrizaldy@gmail.com"
                className="social-link"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-wrapper">
              <div className="image-background"></div>
              <div className="floating-card card-1">
                <span>React.js</span>
              </div>
              <div className="floating-card card-2">
                <span>JavaScript</span>
              </div>
              <div className="floating-card card-3">
                <span>CSS3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
};

export default Hero;
