import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollDirection = useRef('none');

  // Handle scroll event with immediate header hiding
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY.current) {
        scrollDirection.current = 'down';
        // Hide header immediately when scrolling down
        setHeaderVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        scrollDirection.current = 'up';
        // Show header when scrolling up
        setHeaderVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
      
      // Set the scrolled state for styling
      if (currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        // Always show header when at the top
        setHeaderVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Initial navbar animation on mount
  useEffect(() => {
    // Create a timeline for navbar entrance
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }});
    
    // Initial state
    gsap.set(['.logo', '.nav-links a', '.contact-btn'], { 
      opacity: 0,
      y: -20
    });

    // Animate navbar elements
    tl.to('.logo', {
      opacity: 1,
      y: 0,
      duration: 0.8
    })
    .to('.nav-links a', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1
    }, '-=0.4')
    .to('.contact-btn', {
      opacity: 1,
      y: 0,
      duration: 0.6
    }, '-=0.2');

    // Hover animations for nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          scale: 1.1,
          color: '#ff8c38',
          duration: 0.3
        });
      });
      
      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          scale: 1,
          color: '#000',
          duration: 0.3
        });
      });
    });

  }, []);

  const openSidebar = () => {
    setSidebarOpen(true);
    document.body.style.overflow = 'hidden';

    gsap.to('.sidebar', {
      left: 0,
      duration: 0.3,
      ease: 'power2.out'
    });

    gsap.fromTo('.sidebar-links a',
      { x: -20, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.3,
        stagger: 0.05,
        delay: 0.1
      }
    );
  };

  const closeSidebar = () => {
    gsap.to('.sidebar-links a', {
      x: -20,
      opacity: 0,
      stagger: 0.05,
      duration: 0.2
    });

    gsap.to('.sidebar', {
      left: '-100%',
      duration: 0.3,
      ease: 'power2.inOut',
      onComplete: () => {
        setSidebarOpen(false);
        document.body.style.overflow = 'auto';
      }
    });
  };

  const toggleSidebar = () => {
    if (sidebarOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };

  // Close sidebar on window resize if width is > 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) closeSidebar();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''} ${headerVisible ? '' : 'header-hidden'}`}>
      <div className="top-header">
        <div className="header-left">
          <a href="tel:888-601-5359" className="phone-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
           70093 64216
          </a>
          <a href="tel:888-601-5359" className="phone-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            85588 58855 
          </a>
        </div>
        <div className="header-right">
          <a href="mailto:hello@adgod360.com" className="email-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            hello@adgod360.com 
          </a>
          <div className="header-address">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Office No - 02, Fourth Floor, City Court, Zirakpur 140603, Chandigarh </span>
          </div>
          <Link to="/contact" className="consultation-btn mobile-contact">
            Contact Us  <svg
        className="arrow-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
      >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
          </Link>
        </div>
      </div>

      <nav className="navbar">
        <Link to="/" className="logo">
          <img className='love' src="/logomain.svg" alt="Logo" />
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/works">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="navbar-right">
          <Link to="/contact" className="consultation-btn desktop-contact">
           Contact Us   <svg
        className="arrow-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
      >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
          </Link>

          <button className={`toggle-btn ${sidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}>
            <svg className="grid-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="8" x2="26" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="0" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="1" y1="24" x2="26" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-links">
          <Link to="/" onClick={closeSidebar}>Home</Link>
          <Link to="/about" onClick={closeSidebar}>About Us</Link>
          <Link to="/services" onClick={closeSidebar}>Our Services</Link>
          <Link to="/works" onClick={closeSidebar}>Portfolio</Link>
          <Link to="/contact" onClick={closeSidebar}>Contact</Link>
        </div>
      </div> */}

<div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
  <div className="sidebar-links">
    <Link to="/" onClick={closeSidebar}>Home</Link>
    <Link to="/about" onClick={closeSidebar}>About Us</Link>
    <Link to="/services" onClick={closeSidebar}>Our Services</Link>
    <Link to="/works" onClick={closeSidebar}>Portfolio</Link>
    <Link to="/contact" onClick={closeSidebar}>Contact</Link>
  </div>
  
  <div className="sidebar-company-info">
    <h3>Digital Marketing Experts</h3>
    <p>AdGod360 is a full-service digital marketing agency specializing in SEO, social media marketing, and paid advertising campaigns that drive real results for your business.</p>
    
    <div className="sidebar-contact-info">
      <div className="sidebar-contact-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <a href="tel:7009364216">70093 64216, 85588 58855</a>
      </div>
      
      <div className="sidebar-contact-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <a href="mailto:hello@adgod360.com">hello@adgod360.com</a>
      </div>
      
      <div className="sidebar-contact-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Office No - 02, Fourth Floor, City Court, Zirakpur 140603, Chandigarh</span>
      </div>
    </div>
    
 
  </div>
</div>
      {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </div>
  );
};

export default Navbar;