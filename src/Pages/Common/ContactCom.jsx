import React from 'react';
import { Link } from 'react-router-dom';
import contactImage from '../../assets/ContactCom.png'; // Update with your actual image name
import '../Styles/ContactCom.css';

const ContactCom = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-image-wrapper">
          <img 
            src={contactImage} 
            alt="Professional thinking" 
            className="contact-image"
          />
        </div>
        
        <div className="contact-content">
          <h2 className="contact-title">
            Have A Project In Mind?
            <span className="contact-subtitle">Let's Get To Work.</span>
          </h2>
          
          <Link to="/contact" className="get-in-touch-btn">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCom; 