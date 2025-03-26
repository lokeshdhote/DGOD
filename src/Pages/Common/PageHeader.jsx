import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/PageHeader.css';

const PageHeader = ({ title, currentPage }) => {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const breadcrumbRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    )
    .fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.5"
    )
    .fromTo(breadcrumbRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 },
      "-=0.4"
    );
  }, []);

  return (
    <div className="page-header" ref={headerRef}>
      <div className="page-header-container">
        <h1 ref={titleRef}>{title}</h1>
        <div className="page-breadcrumb" ref={breadcrumbRef}>
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{currentPage}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader; 