import React, { useState } from 'react';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaGithub, FaLinkedin, FaInstagram, FaPaperPlane 
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulasi pengiriman form
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setFormStatus('');
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'faridrizaldy@gmail.com',
      link: 'mailto:faridrizaldy@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+62 8820 XXXX XXXX',
      link: 'tel:+628820XXXXXXXX'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Bandung, Indonesia',
      link: '#'
    }
  ];

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      name: 'GitHub', 
      link: 'https://github.com/faridhrizaldy',
      color: '#333'
    },
    { 
      icon: <FaLinkedin />, 
      name: 'LinkedIn', 
      link: 'https://www.linkedin.com/in/muhammad-faridh-rizaldy-118926245/',
      color: '#0077b5'
    },
    { 
      icon: <FaInstagram />, 
      name: 'Instagram', 
      link: 'https://www.instagram.com/faridh_rizaldy/',
      color: '#e1306c'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together on your next project</p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <h3 className="info-title">Mari Terhubung!</h3>
            <p className="info-description">
              Saya terbuka untuk peluang freelance, kolaborasi proyek, atau 
              hanya sekedar ngobrol tentang teknologi web. Jangan ragu untuk 
              menghubungi saya!
            </p>

            <div className="contact-info-cards">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link}
                  className="info-card"
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-details">
                    <h4 className="info-label">{info.title}</h4>
                    <p className="info-value">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-section">
              <h4 className="social-title">Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ceritakan tentang project Anda..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? (
                  'Mengirim...'
                ) : (
                  <>
                    <FaPaperPlane /> Kirim Pesan
                  </>
                )}
              </button>

              {formStatus === 'success' && (
                <div className="form-message success">
                  ✓ Pesan berhasil terkirim! Saya akan segera menghubungi Anda.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
