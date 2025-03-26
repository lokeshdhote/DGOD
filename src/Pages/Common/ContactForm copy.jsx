import React from 'react';
import '../Styles/Contactform.css';

const ContactForm = () => {
  return (
    <div className="contactform-container">
      <div className="contactform-card">
        <div className="contactform-left">
          <span className="contactform-subtitle">Contact us</span>
          <h2 className="contactform-title">
            Contact Our Team,
            <br />
            Feel free to talk about
            <br />
            anything.
          </h2>

          <div className="contactform-info">
            <div className="contactform-info-item">
              <div className="contactform-icon-wrapper">
                <i className="contactform-icon location">📍</i>
              </div>
              <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
            <div className="contactform-info-item">
              <div className="contactform-icon-wrapper">
                <i className="contactform-icon phone">📞</i>
              </div>
              <p>(252) 555-0126</p>
            </div>
            <div className="contactform-info-item">
              <div className="contactform-icon-wrapper">
                <i className="contactform-icon email">✉️</i>
              </div>
              <p>example@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="contactform-right">
          <form className="contactform-form">
            <div className="contactform-form-group">
              <input 
                type="text" 
                placeholder="Name" 
                className="contactform-input"
              />
            </div>
            <div className="contactform-form-row">
              <div className="contactform-form-group">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="contactform-input"
                />
              </div>
              <div className="contactform-form-group">
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  className="contactform-input"
                />
              </div>
            </div>
            <div className="contactform-form-group">
              <textarea 
                placeholder="Your Questions" 
                className="contactform-textarea"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="contactform-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm; 