import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/HeroPage.css"; // Ensure the CSS file is correctly imported

const HeroPage = () => {
  // Add JavaScript functionality using useEffect
  useEffect(() => {
    // Hover effects for stat cards
    const statCards = document.querySelectorAll(".stat-card");
    statCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
        card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.15)";
        card.style.transition = "all 0.3s ease";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
      });
    });

    // Subtle animation for the background circle
    const circleBg = document.querySelector(".circle-bg");
    let scale = 1;

    const pulseAnimation = () => {
      scale = scale === 1 ? 1.05 : 1;
      if (circleBg) {
        circleBg.style.transform = `translate(-50%, -50%) scale(${scale})`;
        circleBg.style.transition = "transform 2s ease-in-out";
      }
    };

    const interval = setInterval(pulseAnimation, 2000);

    // Cleanup function to remove event listeners and intervals
    return () => {
      statCards.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
      clearInterval(interval);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section className="hero-container">
      <HeroLeft />
      <HeroRight />
    </section>
  );
};

// Sub-components
const SatisfactionBadge = () => (
  <div className="satisfaction-badge">100% Satisfaction Guarantee</div>
);

const HeroLeft = () => (
  <div className="hero-left">
    <SatisfactionBadge />
    <h1>
      Your <span>Success</span>, Our Expertise 360-Degree Marketing Made Simple
    </h1>
    <p className="hero-description">
      ADGOD360 is a Chandigarh-based marketing company with 12+ years of experience. We’ve managed 50+ crores in ad spend, delivering 8x returns for 500+ clients. Our 360-degree strategies in SEO, social media, PPC, and more will help grow your business. Let’s start your success story today!
    </p>
    <ActionsContainer />
  </div>
);

const ActionsContainer = () => (
  <div className="actions-container">
    <Link to="/contact" className="cta-button">
      <span>BOOK FREE CONSULTATION</span>
      <svg
        className="arrow-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
      >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    </Link>

    <ContactSection />
  </div>
);

const ContactSection = () => (
  <div className="contact-section">
    <svg
      className="phone-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0a2257"
      strokeWidth="2"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
    <div className="contact-text">
      <span className="question-text">Have any Question? 70093-64216</span>
    </div>
  </div>
);

const HeroRight = () => (
  <div className="hero-right">
    <PersonContainer />
    <DecorativeElements />
  </div>
);

const PersonContainer = () => (
  <div className="person-container">
    <div className="circle-bg"></div>
    <img
      className="person-img"
      src="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/6184084fce35bcb5ff646b55_ci_hero.png"
      alt="Marketing expert with laptop"
    />
    <StatCard type="clients" label="Happy Clients" value="500+ " />
    <StatCard type="team" label="Years of Experience" value="12+" />
  </div>
);

const StatCard = ({ type, label, value }) => (
  <div className={`stat-card ${type}`}>
    <div className="stat-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
      >
        {type === "clients" ? (
          <>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </>
        ) : (
          <>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="M12 8v4l2 2"></path>
          </>
        )}
      </svg>
    </div>
    <span className="stat-label">{label}</span>
    <span className="stat-value">{value}</span>
  </div>
);

const DecorativeElements = () => (
  <>
    <svg
      className="shape dots"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
    >
      <circle cx="4" cy="4" r="2" fill="#ff6b6b" />
      <circle cx="12" cy="4" r="2" fill="#ff6b6b" />
      <circle cx="20" cy="4" r="2" fill="#ff6b6b" />
      <circle cx="4" cy="12" r="2" fill="#ff6b6b" />
      <circle cx="12" cy="12" r="2" fill="#ff6b6b" />
      <circle cx="20" cy="12" r="2" fill="#ff6b6b" />
      <circle cx="4" cy="20" r="2" fill="#ff6b6b" />
      <circle cx="12" cy="20" r="2" fill="#ff6b6b" />
      <circle cx="20" cy="20" r="2" fill="#ff6b6b" />
    </svg>

    {/* <svg
      className="shape triangle"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <polygon
        points="15,2 28,28 2,28"
        fill="none"
        stroke="#25d366"
        strokeWidth="2"
      />
    </svg> */}
  </>
);

export default HeroPage;