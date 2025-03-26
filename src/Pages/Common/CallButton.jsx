import React from "react";
import { MdCall } from "react-icons/md"; 
import "../Styles/FloatingButtons.css"; // Shared CSS file for both buttons

const CallButton = () => {
  return (
    <a href="tel:+917009364216" className="floating-button call">
      <MdCall size={28} />
    </a>
  );
};

export default CallButton;
