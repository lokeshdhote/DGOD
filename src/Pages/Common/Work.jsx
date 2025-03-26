import React, { useEffect, useRef, useState } from 'react';
import '../Styles/Workmain.css';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const autoScrollRef = useRef(null);

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      name: "Art Of Shopping",
      url: "artofshoppingae.com",
      images: ["https://damsole.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-28-at-3.27.03-PM.jpeg", "https://damsole.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-28-at-3.27.08-PM.jpeg"],
      bgColor: "#d4a76a",
    },
    {
      id: 2,
      name: "Mikhu Boutique",
      url: "mikhuboutique.com",
      images: ["https://damsole.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-28-at-3.27.08-PM.jpeg", "https://damsole.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-28-at-3.27.03-PM.jpeg"],
      bgColor: "#ff8a8a",
    },
    {
      id: 3,
      name: "TIG South",
      url: "www.tigsouth.com",
      images: ["https://damsole.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-28-at-3.27.06-PM.jpeg", "https://damsole.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-28-at-3.27.04-PM-Copy.jpeg"],
      bgColor: "#cec2b3",
    },
    {
      id: 4,
      name: "Al Oumaraa",
      url: "www.aloumaraa.com",
      images: ["https://damsole.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-28-at-3.27.04-PM-Copy.jpeg", "https://damsole.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-28-at-3.27.06-PM.jpeg"],
      bgColor: "#9e3a25",
    },
    {
      id: 5,
      name: "Professional Consultancy",
      url: "professionalconsultancy.com",
      images: ["https://damsole.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-28-at-3.27.09-PM-1.jpeg", "https://damsole.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-28-at-3.35.06-PM-1.jpeg"],
      bgColor: "#9952a0",
    },
    {
      id: 6,
      name: "JK Company",
      url: "jkcompany.com",
      images: ["https://damsole.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-28-at-3.35.06-PM-1.jpeg", "https://damsole.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-28-at-3.27.09-PM-1.jpeg"],
      bgColor: "#0047ab",
    },
  ];

  // Initialize auto-scrolling
  useEffect(() => {
    startAutoScroll();
    
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, []);

  // Monitor slide position
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollPosition = sliderRef.current.scrollLeft;
        const itemWidth = sliderRef.current.offsetWidth / 3; // Assuming 3 visible items
        
        // Calculate which slide is most visible
        const newActiveSlide = Math.round(scrollPosition / itemWidth) % projects.length;
        setActiveSlide(newActiveSlide);
      }
    };

    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener('scroll', handleScroll);
      return () => sliderElement.removeEventListener('scroll', handleScroll);
    }
  }, [projects.length]);

  const startAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    
    autoScrollRef.current = setInterval(() => {
      if (sliderRef.current) {
        const itemWidth = sliderRef.current.offsetWidth / 3;
        const newScrollPosition = sliderRef.current.scrollLeft + itemWidth;
        
        sliderRef.current.scrollTo({
          left: newScrollPosition,
          behavior: 'smooth'
        });
        
        // If we've scrolled to the end, reset to beginning (for infinite scroll effect)
        if (newScrollPosition >= (projects.length * itemWidth)) {
          setTimeout(() => {
            sliderRef.current.scrollTo({
              left: 0,
              behavior: 'auto' // Use 'auto' to avoid animation when resetting
            });
          }, 500);
        }
      }
    }, 3000);
  };

  const scrollToSlide = (index) => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.offsetWidth / 3;
      sliderRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
      setActiveSlide(index);
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setZoomLevel(1);
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setSelectedProject(null);
    setZoomLevel(1);
    document.body.classList.remove('modal-open');
    startAutoScroll();
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  const zoomIn = () => {
    setZoomLevel((prevLevel) => Math.min(prevLevel + 0.1, 2));
  };

  const zoomOut = () => {
    setZoomLevel((prevLevel) => Math.max(prevLevel - 0.1, 0.5));
  };

  // Create a duplicate array of projects for the infinite scroll effect
  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <div className="portfolio-label"><h4>-Portfolio-</h4></div>
        <h1>Our  Portfolio</h1>
        <p>We work on various web technologies and deliver quality work to our clients.</p>
      </div>
      
      <div className="portfolio-carousel-container">
        <div className="portfolio-carousel" ref={sliderRef}>
          {duplicatedProjects.map((project, index) => (
            <div 
              className="project-card" 
              key={`${project.id}-${index}`}
              style={{ backgroundColor: project.bgColor }}
            >
              <div className="project-image-container">
                <img 
                  src={project.images[0]} 
                  alt={project.name} 
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-info">
                    <h3 className="project-name">{project.name}</h3>
                    <div className="client-url">{project.url}</div>
                    <button 
                      className="explore-btn" 
                      onClick={() => openModal(project)}
                    >
                      <i className="fas fa-search-plus"></i>
                      <span>Explore</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="pagination-dots">
          {projects.map((_, index) => (
            <button 
              key={index} 
              className={`pagination-dot ${activeSlide === index ? 'active' : ''}`}
              onClick={() => scrollToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>×</button>
            
            <div className="modal-gallery">
              <div className="gallery-main">
                <img 
                  src={selectedProject.images[currentImageIndex]} 
                  alt={selectedProject.name}
                  style={{ 
                    transform: `scale(${zoomLevel})`,
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
              
              <div className="gallery-controls">
                <button onClick={prevImage} className="gallery-nav prev-btn">
                  <i className="fas fa-chevron-left"></i>
                </button>
                <div className="image-counter">
                  {currentImageIndex + 1}/{selectedProject.images.length}
                </div>
                <button onClick={nextImage} className="gallery-nav next-btn">
                  <i className="fas fa-chevron-right"></i>
                </button>
                <div className="zoom-controls">
                  <button onClick={zoomIn} className="zoom-btn">
                    <i className="fas fa-search-plus"></i>
                  </button>
                  <button onClick={zoomOut} className="zoom-btn">
                    <i className="fas fa-search-minus"></i>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="modal-info">
              <h3>{selectedProject.name}</h3>
              <p>Client: <a href={`https://${selectedProject.url}`} target="_blank" rel="noopener noreferrer">{selectedProject.url}</a></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;