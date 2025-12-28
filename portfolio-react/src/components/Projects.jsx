import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce modern dengan fitur keranjang belanja, payment gateway, dan admin dashboard.',
      image: 'https://via.placeholder.com/400x300/667eea/ffffff?text=E-Commerce',
      category: 'web',
      technologies: ['React', 'Redux', 'Tailwind CSS', 'Firebase'],
      github: 'https://github.com/faridhrizaldy/ecommerce-platform',
      demo: 'http://localhost:5173',
      featured: true
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'Dashboard analytics untuk mengelola berbagai akun social media dengan real-time updates.',
      image: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=Dashboard',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'Chart.js', 'REST API'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Website portfolio interaktif dengan animasi modern, smooth scrolling, dan design responsif. Menampilkan project showcase dengan filter dan contact form.',
      image: 'https://via.placeholder.com/400x300/4facfe/ffffff?text=Portfolio',
      category: 'web',
      technologies: ['React', 'Vite', 'Framer Motion', 'CSS3'],
      github: 'https://github.com/faridhrizaldy/portfolio',
      demo: 'http://localhost:3000',
      featured: true
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas dengan drag & drop, deadline tracking, dan team collaboration.',
      image: 'https://via.placeholder.com/400x300/43e97b/ffffff?text=Task+Manager',
      category: 'app',
      technologies: ['React', 'Redux Toolkit', 'DnD Kit', 'Supabase'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Weather Forecast App',
      description: 'Aplikasi cuaca dengan data real-time dari berbagai kota di seluruh dunia.',
      image: 'https://via.placeholder.com/400x300/fa709a/ffffff?text=Weather',
      category: 'app',
      technologies: ['React', 'OpenWeather API', 'Styled Components'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Restaurant Landing Page',
      description: 'Landing page modern untuk restaurant dengan menu interaktif dan online reservation.',
      image: 'https://via.placeholder.com/400x300/fee140/333333?text=Restaurant',
      category: 'landing',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'AOS'],
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'app', label: 'Applications' },
    { id: 'landing', label: 'Landing Pages' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Portfolio Projects</h2>
          <p className="section-subtitle">Some of my recent works</p>
        </div>

        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      title="View Code"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                {project.featured && <div className="featured-badge">Featured</div>}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Ingin melihat lebih banyak project?</p>
          <a 
            href="https://github.com/faridhrizaldy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaGithub /> Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
