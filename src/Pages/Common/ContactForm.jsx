import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaEnvelope, FaMedal, FaPhone, FaTrophy, FaUsers, FaWhatsapp } from "react-icons/fa";
import '../Styles/Contactform.css';
const ContactForm = () => {
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Badge animation
    const badgeContainer = document.querySelector(".contact-badge-container");
    const interval = setInterval(() => {
      badgeContainer.style.transform = "scale(1.05)";
      setTimeout(() => {
        badgeContainer.style.transform = "scale(1)";
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = () => {
    return name.trim() && isValidEmail(email.trim()) && country.trim() && message.trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    if (isFormValid()) {
      alert("Form submitted successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setCountry("");
      setMessage("");
      setAttemptedSubmit(false);
    } else {
      alert("Please fill in all required fields correctly.");
    }
  };

  return (
    <div className="contact-container">
      {/* Left Section */}
      <div className="contact-content-left">
        <h1 className="contact-headline">Trusted by startups and Fortune 500 companies</h1>

        <div className="contact-stats-container">
          {/* Stat 1 */}
          <div className="contact-stat-item">
            <div className="contact-icon">
              <FaTrophy />
            </div>
            <div className="contact-stat-text">
              <h3>12+ years of experience</h3>
              <p>We can handle projects of all complexities.</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="contact-stat-item">
            <div className="contact-icon">
              <FaMedal />
            </div>
            <div className="contact-stat-text">
              <h3>500+ satisfied customers</h3>
              <p>Startups to Fortune 500, we have worked with all.</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="contact-stat-item">
            <div className="contact-icon">
              <FaUsers />
            </div>
            <div className="contact-stat-text">
              <h3>675+ in-house team</h3>
              <p>Top 1% industry talent to ensure your digital success.</p>
            </div>
          </div>
        </div>

        {/* Client logos */}
        <div className="contact-clients">
          <img
            src="https://www.pixelcrayons.com/wp-content/themes/pixelcrayons/v4.0/assets/images/home-images/fot-01.svg"
            alt="Yale University"
            className="contact-client-logo"
          />
          <img
            src="https://www.pixelcrayons.com/wp-content/themes/pixelcrayons/v4.0/assets/images/home-images/fot-02.svg"
            alt="Dubai Police"
            className="contact-client-logo"
          />
          <img
            src="https://www.pixelcrayons.com/wp-content/themes/pixelcrayons/dev-img/google-cloud-ico.svg"
            alt="Panasonic"
            className="contact-client-logo"
          />
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="contact-form-container" id="contact-form">
        {/* Badge */}
        <div className="contact-badge-container">
          <div className="contact-badge">SAME DAY RESPONSE</div>
          <div className="contact-badge-tag">GUARANTEED</div>
          <div className="contact-stars">★★★</div>
        </div>

        <h2>Let’s Work Together  </h2>
        <p>Accelerate your online growth and work with a partner who truly values your goals. </p>

        <div className="contact-options">
          <a href="tel:+7009364216" className="contact-option">
            <FaPhone />
            Book A Call
          </a>
          <a
            href="https://wa.me/7009364216"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-option"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
          <a href="mailto:hello@adgod360.com " className="contact-option">
            <FaEnvelope />
            Email us
          </a>
        </div>

        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <div className="contact-form-group">
              <label htmlFor="contact-name">Name</label>
              <input
                type="text"
                id="contact-name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                type="email"
                id="contact-email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="contact-form-row">
            <div className="contact-form-group">
              <label htmlFor="contact-phone">Phone Number</label>
              <input
                type="tel"
                id="contact-phone"
                placeholder="Phone No."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="contact-country">Country</label>
              <input
                type="text"
                id="contact-country"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="contact-form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              className="contact-message-textarea"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="contact-checkbox-group">
            <div className="contact-checkbox-item">
              <FaCheckCircle />
              100% Confidential
            </div>
            <div className="contact-checkbox-item">
              <FaCheckCircle />
              We Sign NDA
            </div>
          </div>

          <button type="submit" className="contact-submit-btn">
            Send Now
          </button>
        </form>

        {/* Address Section */}
        <div className="contact-address-section">
          <h3>Our Office</h3>
          <p>
            Address - Office No - 02, Fourth Floor, City Court, Zirakpur 140603,
            Chandigarh
          </p>
          <p>
            Phone Numbers -
            <a href="tel:+7009364216">70093 64216</a>,
            <a href="tel:+8558858855">85588 58855</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;