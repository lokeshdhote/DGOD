import React, { useEffect } from "react";
import "../Styles/Footer.css"; // Import the CSS file for styling

const Footer = () => {
  // Dynamically update the current year in the copyright section
  useEffect(() => {
    document.getElementById("current-year").textContent =
      new Date().getFullYear();
  }, []);

  // Handle responsive footer columns
  const handleResponsiveFooter = () => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const desktopColumns = document.querySelectorAll(".footer-col");
    const mobileColumns = document.querySelector(".mobile-footer-columns");

    if (mediaQuery.matches) {
      // Mobile view
      mobileColumns.style.display = "flex";
      // Hide the original second and third columns on mobile
      desktopColumns[1].style.display = "none";
      desktopColumns[2].style.display = "none";
    } else {
      // Desktop view
      mobileColumns.style.display = "none";
      // Show the original columns on desktop
      desktopColumns[1].style.display = "block";
      desktopColumns[2].style.display = "block";
    }
  };

  // Run on page load and whenever the screen size changes
  useEffect(() => {
    handleResponsiveFooter();
    window.addEventListener("resize", handleResponsiveFooter);
    return () => {
      window.removeEventListener("resize", handleResponsiveFooter);
    };
  }, []);

  return (
    <footer className="footer">
      {/* Decorative elements */}
      <div className="floating-element floating-1"></div>
      <div className="floating-element floating-2"></div>

      <div className="container">
        <div className="footer-main">
          {/* First Column */}
          <div className="footer-col">
            <div className="logofooter">
              <img src="./logomain.svg" alt="ADGOD 360 Logo" />
            </div>
            <p className="footer-description">
              We are a creative digital agency dedicated to building innovative
              and impactful digital experiences.
            </p>
            <div className="mobile-description">
              <p>
                Digital Marketing Experts<br />
                AdGod360 is a full-service digital marketing agency specializing
                in SEO, social media marketing, and paid advertising campaigns
                that drive real results for your business.
              </p>
            </div>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Mobile view for columns (hidden on desktop) */}
          <div className="mobile-footer-columns" style={{ display: "none" }}>
            <div className="mobile-footer-column">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/services">Our Services</a>
                </li>
                <li>
                  <a href="/works">Works</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="mobile-footer-column">
              <h3 className="footer-heading">Our Services</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Mobile Apps</a>
                </li>
                <li>
                  <a href="#">UI/UX Design</a>
                </li>
                <li>
                  <a href="#">Digital Marketing</a>
                </li>
                <li>
                  <a href="#">Branding</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop view for Second Column */}
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Our Services</a>
              </li>
              <li>
                <a href="/works">Works</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Desktop view for Third Column */}
          <div className="footer-col">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Mobile Apps</a>
              </li>
              <li>
                <a href="#">UI/UX Design</a>
              </li>
              <li>
                <a href="#">Digital Marketing</a>
              </li>
              <li>
                <a href="#">Branding</a>
              </li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div className="footer-col">
            <h3 className="footer-heading">Contact Info</h3>
            <ul className="contact-info footer-links">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span className="contact-text">
                  Office No - 02, Fourth Floor, City Court, Zirakpur 140603,
                  Chandigarh
                </span>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <span className="contact-text">70093 64216, 85588 58855</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span className="contact-text">hello@adgod360.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Enhanced Copyright Section */}
      <div className="copyright">
        <div className="copyright-container">
          <div className="copyright-text">
            Copyright © <span id="current-year"></span> , All Rights Reserved. A
            ADGOD360 Company.
          </div>
          <div className="rating-section">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="rating-text">
              4.9 out of 5.0 by 4643 clients on over 10800+ projects
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;