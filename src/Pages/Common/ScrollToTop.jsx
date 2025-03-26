import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// CSS for the enhanced scroll-to-contact button
const styles = `
.scroll-to-contact {
  position: fixed;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 38px;
  height: 132px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  color: #fa9732;
  border-radius: 30px;
  border: 1px solid #bae1d7;
  box-shadow: 0 4px 12px rgba(0, 102, 85, 0.15), 
              0 8px 24px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
  z-index: 1000;
  padding: 15px 0;
  overflow: hidden;
}

.scroll-to-contact::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 30px;
  z-index: -1;
}

.scroll-to-contact span {
  writing-mode: vertical-rl;
  transform: rotate(1deg);
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 2px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #fa9732;
}

.scroll-to-contact .icon-container svg {
  color: #fa9732;
  font-size: 14px;
  animation: bounce 2s infinite;
}

.scroll-to-contact.show {
  opacity: 1;
}

.scroll-to-contact:hover {
  transform: translateY(-50%) scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 102, 85, 0.2),
              0 12px 28px rgba(0, 0, 0, 0.08);
  background: linear-gradient(145deg, #d1f0e6, #c2e9dd);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-6px);
  }
  60% {
    transform: translateY(-3px);
  }
}

@media (max-width: 768px) {
  .scroll-to-contact {
    right: 6px;
    width: 38px;
    height: 120px;
  }
  
  .scroll-to-contact span {
    font-size: 14px;
    margin-top: 10px;
  }
  
  .scroll-to-contact .icon-container {
    width: 26px;
    height: 26px;
    margin-left: 11px;
  }
}
`;

const ScrollToContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);

    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      document.head.removeChild(styleElement);
    };
  }, []);

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <div
      className={`scroll-to-contact ${isVisible ? "show" : ""}`}
      onClick={goToContact}
      aria-label="Go to contact page"
    >
      <span>Contact</span>
      <div className="icon-container">
        <FaArrowDown />
      </div>
    </div>
  );
};

export default ScrollToContact;
