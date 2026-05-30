import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-subtitle">I'm always open to new opportunities and collaborations.</p>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="accent" />
            <div>
              <h3>Email</h3>
              <p>nur008.cse.diu@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <FaWhatsapp className="accent" />
            <div>
              <h3>WhatsApp</h3>
              <p><a href="https://wa.me/8801615405325" target="_blank" rel="noreferrer">+880 1615-405325</a></p>
            </div>
          </div>
          <div className="contact-item">
            <FaLinkedin className="accent" />
            <div>
              <h3>LinkedIn</h3>
              <p><a href="https://www.linkedin.com/in/nur-mohammad-6377a8359/" target="_blank" rel="noreferrer">Connect with me</a></p>
            </div>
          </div>
          <div className="contact-item">
            <FaGithub className="accent" />
            <div>
              <h3>GitHub</h3>
              <p><a href="https://github.com/nur-008" target="_blank" rel="noreferrer">Follow my work</a></p>
            </div>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="accent" />
            <div>
              <h3>Location</h3>
              <p>Naogaon, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="contact-form-placeholder">
          <p>You can reach out to me directly via LinkedIn or Email. I'll get back to you as soon as possible!</p>
          <div className="message-box">
             "Let's build something amazing together!"
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
