import React, { useEffect, useRef } from 'react';
import '../Styles/TrustedClients.css'; // Assuming you have a separate CSS file for styles

const InfiniteLogoCarousel = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const logoContainer = track.querySelector('.logo-container');

    // Clone the logo container to create the infinite scroll effect
    const clone = logoContainer.cloneNode(true);
    track.appendChild(clone);

    // Pause animation on hover
    const handleMouseEnter = () => {
      track.style.animationPlayState = 'paused';
    };

    const handleMouseLeave = () => {
      track.style.animationPlayState = 'running';
    };

    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);

    // Adjust animation speed based on screen width
    const adjustSpeed = () => {
      const width = window.innerWidth;
      if (width < 480) {
        track.style.animationDuration = '20s';
      } else if (width < 768) {
        track.style.animationDuration = '25s';
      } else {
        track.style.animationDuration = '30s';
      }
    };

    // Initial adjustment
    adjustSpeed();

    // Adjust on window resize
    window.addEventListener('resize', adjustSpeed);

    // Cleanup event listeners
    return () => {
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', adjustSpeed);
    };
  }, []);

  return (
    <div>
      <div className="heading-container">
        <h2 className="heading">
          <h1 className='heading-title'>   Trusted by Company</h1>
          Trusted by startups and Fortune <span className="highlight">1K</span> companies
        </h2>
      </div>

      <div className="logo-section">
        <div className="logo-track" id="track" ref={trackRef}>
          <div className="logo-container">
            <div className="logo">
              <img
                src="https://www.pixelcrayons.com/wp-content/themes/pixelcrayons/dev-img/microsoft-image.svg"
                alt="Toy Company"
              />
            </div>
            <div className="logo">
              <img
                src="https://assets.goodfirms.co/badges/color-badge/top-software-development-companies.svg"
                alt="Thomson Reuters"
              />
            </div>
            <div className="logo">
              <img
                src="https://www.pixelcrayons.com/wp-content/themes/pixelcrayons/v3.0/assets/images/aw-01.svg"
                alt="Qatar Airways"
              />
            </div>
            <div className="logo">
              <img
                src="https://www.pixelcrayons.com/wp-content/themes/pixelcrayons/v3.0/assets/images/aw-02.svg"
                alt="Grundfos"
              />
            </div>
            <div className="logo">
              <img
                src="https://www.pixelcrayons.com/wp-content/themes/pixelcrayons/dev-img/Google-Partner-PXL.svg"
                alt="Save"
              />
            </div>
            <div className="logo">
              <img
                src="https://www.pixelcrayons.com/wp-content/themes/pixelcrayons/v4.0/assets/images/home-images/fot-02.svg"
                alt="BERD"
              />
            </div>
            <div className="logo">
              <img
                src="https://www.pixelcrayons.com/wp-content/themes/pixelcrayons/v3.0/assets/images/whyI-18.png"
                alt="Yale University"
              />
            </div>
            <div className="logo">
              <img
                src="https://www.pixelcrayons.com/wp-content/themes/pixelcrayons/dev-img/google-cloud-ico.svg"
                alt="Police"
              />
            </div>
            <div className="logo">
              <img
                src="https://www.pixelcrayons.com/wp-content/themes/pixelcrayons/v4.0/assets/images/home-images/fot-01.svg"
                alt="Dubai"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogoCarousel;