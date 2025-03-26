import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../Styles/WhatsAppChat.css";

const WhatsAppChat = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  
  // Animation effect every few seconds
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setIsAnimated(true);
      setTimeout(() => setIsAnimated(false), 1000);
    }, 4000);
    
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="mobile-whatsapp-container">
      <div className="mobile-whatsapp-text">
        <span className="mobile-wave-emoji">👋</span> We Are Here!
      </div>
      <a 
        href="https://wa.me/7009364216" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`mobile-whatsapp-btn ${isAnimated ? 'mobile-pulse' : ''}`}
      >
        <FaWhatsapp size={25} />
      </a>
    </div>
  );
};

export default WhatsAppChat;