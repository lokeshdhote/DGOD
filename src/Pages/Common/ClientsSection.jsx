import React, { useEffect } from "react";
import LogoScrolling from "../Common/TrustedClients";
import "../Styles/ClientsSection.css"; // Move styles to an external CSS file
const ClientsSection = () => {
  useEffect(() => {
    // Optional: Add some subtle interactivity
    document.querySelectorAll(".client-logo").forEach((logo) => {
      logo.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)";
        this.querySelector("img").style.filter = "grayscale(0%)";
      });

      logo.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
        this.querySelector("img").style.filter = "grayscale(100%)";
      });
    });
  }, []);

  return (
    <section className="clients-section">
      <div className="section-header">
        <h2 className="section-title">Our Trusted Clients</h2>
        <p className="section-subtitle">
          We've had the privilege of working with innovative companies across
          various industries, helping them transform their digital presence and
          achieve remarkable growth.
        </p>
      </div>
<LogoScrolling /> 
      {/* <div className="clients-grid">
        {[
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            alt: "Google Logo",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            alt: "Microsoft Logo",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_Azure_Logo.svg",
            alt: "Azure Logo",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Uber_logo_2018.svg",
            alt: "Uber Logo",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Airbnb_Logo_B%C3%A9lo.svg",
            alt: "Airbnb Logo",
          },
        ].map((client, index) => (
          <div className="client-logo" key={index}>
            <img src={client.src} alt={client.alt} />
          </div>
        ))}
      </div> */}

      <div className="trust-badges">
        {[
          {
            title: "100% Secured",
            description:
              "We prioritize the highest security standards in all our digital solutions.",
            icon: (
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            ),
          },
          {
            title: "Expert Support",
            description:
              "Our dedicated team provides round-the-clock professional support.",
            icon: (
              <>
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </>
            ),
          },
          {
            title: "Innovation Driven",
            description:
              "We continuously innovate to deliver cutting-edge digital solutions.",
            icon: (
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            ),
          },
        ].map((badge, index) => (
          <div className="trust-badge" key={index}>
            <div className="trust-badge-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {badge.icon}
              </svg>
            </div>
            <h3 className="trust-badge-title">{badge.title}</h3>
            <p className="trust-badge-description">{badge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
