import React from "react";
import "../Styles/CompanyVision.css"; // External CSS for styling

const CompanyVision = () => {
  const sections = [
    {
      title: "Future Plans",
      text: "This is the sample dummy text insert your desired text here because this is the dummy text.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_7GNe1V8oLLFCUd_Fgl1Ac7dkPY6Qs5qXI8yOseQ3iAFnG1_ObKQHW6WMX4bJ6I-g2M4&usqp=CAU",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Our Values",
      text: "This is the sample dummy text insert your desired text here because this is the dummy text.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5jAIdYBJaz93hbYGF6EVxCZgrR-PjtaFE58viWTNU43vyUngzlNi1S3Mly5z8cEOLus&usqp=CAU",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
    },
    {
      title: "Our Mission",
      text: "This is the sample dummy text insert your desired text here because this is the dummy text.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HlC36npRoNUNBh8G7H4zRI434EmeneHycIE_BJS1q2WZCaWasgWmNhnzuHUNQMFBitA&usqp=CAU",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </svg>
      ),
    },
  ];

  return (
    <div className="containerVission">
      <h1 className="section-title">Company Vision and Mission</h1>
      <div className="company-sections">
        {sections.map((section, index) => (
          <div key={index} className="section">
            <img src={section.image} alt={section.title} className="section-image" />
            <div className="section-icon">{section.icon}</div>
            <h2 className="section-subtitle">{section.title}</h2>
            <p className="section-text">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyVision;
