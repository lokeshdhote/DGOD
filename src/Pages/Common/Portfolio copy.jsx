import React, { useState } from 'react';
import '../Styles/Portfolio.css';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      name: "Art Of Shopping",
      url: "artofshoppingae.com",
      images: ["/images/projects/artofshoppingae-1.jpg", "/images/projects/artofshoppingae-2.jpg"],
      bgColor: "#d4a76a",
    },
    {
      id: 2,
      name: "Mikhu Boutique",
      url: "mikhuboutique.com",
      images: ["/images/projects/mikhuboutique-1.jpg", "/images/projects/mikhuboutique-2.jpg"],
      bgColor: "#ff8a8a",
    },
    {
      id: 3,
      name: "TIG South",
      url: "www.tigsouth.com",
      images: ["/images/projects/tigsouth-1.jpg", "/images/projects/tigsouth-2.jpg"],
      bgColor: "#cec2b3",
    },
    {
      id: 4,
      name: "Al Oumaraa",
      url: "www.aloumaraa.com",
      images: ["/images/projects/aloumaraa-1.jpg", "/images/projects/aloumaraa-2.jpg"],
      bgColor: "#9e3a25",
    },
    {
      id: 5,
      name: "Professional Consultancy",
      url: "professionalconsultancy.com",
      images: ["/images/projects/professionalconsultancy-1.jpg", "/images/projects/professionalconsultancy-2.jpg"],
      bgColor: "#9952a0",
    },
    {
      id: 6,
      name: "JK Company",
      url: "jkcompany.com",
      images: ["/images/projects/jkcompany-1.jpg", "/images/projects/jkcompany-2.jpg"],
      bgColor: "#0047ab",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setZoomLevel(1);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setZoomLevel(1);
    document.body.style.overflow = 'auto';
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

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <div className="portfolio-label">-Portfolio-</div>
        <h1>Our Website Development Portfolio</h1>
        <p>we work on various web technologies and deliver quality work to our clients.</p>
      </div>
      
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div 
            className="project-card" 
            key={project.id}
            style={{ backgroundColor: project.bgColor }}
          >
            <div className="project-image-container">
              <img 
                src={project.images[0]} 
                alt={project.name} 
                className="project-image"
              />
              <div className="project-overlay">
                <button 
                  className="explore-btn" 
                  onClick={() => openModal(project)}
                >
                  <i className="fas fa-search-plus"></i>
                  <span>Explore</span>
                </button>
              </div>
            </div>
            <div className="project-client">
              <div className="client-label">CLIENT:</div>
              <div className="client-url">{project.url}</div>
            </div>
          </div>
        ))}
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

export default Portfolio;