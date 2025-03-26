import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react';
import '../Styles/ProjectCom.css';
// Import images correctly from assets folder
import Rectangle705 from '../../assets/images/Rectangle 705.png';
import Rectangle706 from '../../assets/images/Rectangle 706.png';
import Rectangle708 from '../../assets/images/Rectangle 708.png';
import Rectangle710 from '../../assets/images/Rectangle 710.png';

gsap.registerPlugin(ScrollTrigger);

const ProjectCom = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const headerRef = useRef(null);
  const tabsRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    // Initial animations
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
      }
    });

    tl.fromTo(headerRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }
    );

    // Tabs animation
    gsap.fromTo(tabsRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.5,
        scrollTrigger: {
          trigger: tabsRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  useEffect(() => {
    // Animate projects when tab changes
    const projectCards = projectsRef.current.children;
    
    gsap.fromTo(projectCards,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.2)",
      }
    );
  }, [activeFilter]);

  const filters = [
    'All',
    'UI/UX',
    'Development',
    'Graphic Design',
    'Motion',
    'Branding',
    'Business'
  ];

  const projects = [
    {
      id: 1,
      image: Rectangle705,
      category: 'UI/UX',
      title: 'Mobile App Design'
    },
    {
      id: 2,
      image: Rectangle706,
      category: 'Development',
      title: 'Web Development'
    },
    {
      id: 3,
      image: Rectangle708,
      category: 'Graphic Design',
      title: 'Brand Identity'
    },
    {
      id: 4,
      image: Rectangle710,
      category: 'UI/UX',
      title: 'Website Design'
    },
    {
      id: 5,
      image: Rectangle705,
      category: 'Motion',
      title: 'Animation Project'
    },
    {
      id: 6,
      image: Rectangle706,
      category: 'Branding',
      title: 'Brand Strategy'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="projects-section">
      <div className="projects-header" ref={headerRef}>
        <h3 className="subtitle">OUR WORK</h3>
        <h2 className="title">See Our Recent Case Studies</h2>
      </div>

      <div className="projects-filter">
        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid" ref={projectsRef}>
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
              });
            }}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCom; 