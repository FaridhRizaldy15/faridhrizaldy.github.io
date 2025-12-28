import React from 'react';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaNpm, 
  FaBootstrap, FaSass 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiNextdotjs, SiRedux, 
  SiWebpack, SiVite, SiFigma, SiPostman 
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Front-End Frameworks & Libraries',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 90 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 85 },
        { name: 'Redux', icon: <SiRedux />, level: 80 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 75 },
      ]
    },
    {
      title: 'Core Technologies',
      skills: [
        { name: 'JavaScript', icon: <FaJs />, level: 90 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
        { name: 'Sass/SCSS', icon: <FaSass />, level: 85 },
      ]
    },
    {
      title: 'CSS Frameworks',
      skills: [
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90 },
        { name: 'Bootstrap', icon: <FaBootstrap />, level: 88 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 85 },
        { name: 'NPM', icon: <FaNpm />, level: 85 },
        { name: 'Webpack', icon: <SiWebpack />, level: 75 },
        { name: 'Vite', icon: <SiVite />, level: 85 },
        { name: 'Figma', icon: <SiFigma />, level: 80 },
        { name: 'Postman', icon: <SiPostman />, level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="skills-content">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-card"
                    style={{ animationDelay: `${skillIndex * 0.1}s` }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        >
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills">
          <h3 className="additional-title">Additional Skills & Expertise</h3>
          <div className="tags">
            <span className="tag">Responsive Design</span>
            <span className="tag">RESTful API Integration</span>
            <span className="tag">Performance Optimization</span>
            <span className="tag">Cross-Browser Compatibility</span>
            <span className="tag">UI/UX Implementation</span>
            <span className="tag">Version Control (Git)</span>
            <span className="tag">Agile/Scrum</span>
            <span className="tag">Web Accessibility</span>
            <span className="tag">SEO Best Practices</span>
            <span className="tag">Testing & Debugging</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
