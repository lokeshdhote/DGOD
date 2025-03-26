import React from "react";
import { Link } from "react-router-dom";
import "../Styles/AboutUsCom.css"; // Ensure you create this CSS file for styles

const AboutUs = ({
  title = "Empowering Businesses with 360-Degree Marketing Solutions",
  description = "ADGOD360 is a leading marketing company based in Chandigarh, backed by a super experienced team. With over 12 years of collective experience, we’ve helped businesses grow exponentially. Our expertise includes managing ad spends of over 50 crores, delivering an 8x ROI for our clients. We’ve successfully collaborated with 500+ clients, achieving an 80% satisfaction rate. Our 360-degree marketing strategies are designed to elevate your business to new heights. Let’s start your success story with ADGOD360!",
  stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "8x", label: "ROI Delivered" },
    { number: "12+", label: "Years of Experience" },
  ],
  buttonText = "Explore Our Services",
}) => {
  return (
    <div className="about-container">
      <section className="about-section">
        {/* Left Content */}
        <div className="about-content">
          <div className="about-section-tag">About Us</div>
          <h1 className="about-section-title">{title}</h1>
          <p className="about-section-description">{description}</p>

          <div className="stats-container">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
<div  className="view-service-btn" >
<Link to="/services"  className="btn">
            {buttonText}
          </Link>
</div>
         
        </div>

        {/* Right Content (Image) */}
        <div className="about-image">
          <img
            src="https://media-hosting.imagekit.io//a69ce6e3ced942a3/aboutusimage.png?Expires=1835580220&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DqWOBTDPmdEMyqkhu5ZI7~T2iVa6SaBaYaw7Ue3IcjCE5z5Xp0eshaP9~5yfLRXfFC2aBG1ZDeDkTNch0ZFBWYZG7sJvgz4xbn9dsKS8AmEDGmLo~Asnp7aRH4y2pDXQKqBhVgl9InnDEXQ6Zu4ZKgWCZY2t2eu4FgKi8KKp-mfcegBQ~tDLtYy6flgSsyDRM3KjBxC2LzezSW5FlWs0tr080cVAR7gri7ZhOXLUjIciqqDgWztcoNVdPspz0wVd1svyI-zWM~rzMAt6BcyiqFs5W9ctpTbg5XSqHtZ5mJ5glfC3SxTcQ697lNmwXvM9hYDyEU-SxwZ1a4-CqTPU4A__"
            alt="ADGOD360 Team"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;