import React from 'react';
import { FaCode, FaLaptopCode, FaUsers, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
  const experiences = [
    {
      icon: <FaCode />,
      title: '3+ Years',
      description: 'Development Experience'
    },
    {
      icon: <FaLaptopCode />,
      title: '20+ Projects',
      description: 'Completed Successfully'
    },
    {
      icon: <FaUsers />,
      title: '15+ Clients',
      description: 'Satisfied Customers'
    },
    {
      icon: <FaRocket />,
      title: 'Fast & Clean',
      description: 'Code Quality'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tentang Saya</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="about-image-wrapper">
              <div className="about-image-bg"></div>
              <div className="about-photo">
                {/* Placeholder for profile image */}
                <div className="photo-placeholder">FR</div>
              </div>
            </div>
          </div>

          <div className="about-text">
            <h3 className="about-heading">
              Front-End Developer Based in Bandung
            </h3>
            <p className="about-description">
              Hai! Saya Faridh Rizaldy, seorang Front-End Developer yang berfokus 
              pada pembuatan website modern dan responsif. Saya memiliki keahlian 
              dalam mengubah desain UI/UX menjadi kode yang clean, efisien, dan 
              mudah di-maintain.
            </p>
            <p className="about-description">
              Dengan pengalaman dalam berbagai proyek web development, saya selalu 
              berusaha untuk terus belajar teknologi terbaru dan best practices 
              dalam dunia front-end development. Saya passionate dalam menciptakan 
              user experience yang optimal dan performa website yang cepat.
            </p>

            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Nama:</span>
                <span className="info-value">Muhammad Faridh Rizaldy</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">faridrizaldy@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Lokasi:</span>
                <span className="info-value">Bandung, Indonesia</span>
              </div>
              <div className="info-item">
                <span className="info-label">Status:</span>
                <span className="info-value status-available">Available for Freelance</span>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-cards">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-card">
              <div className="exp-icon">{exp.icon}</div>
              <h4 className="exp-title">{exp.title}</h4>
              <p className="exp-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
