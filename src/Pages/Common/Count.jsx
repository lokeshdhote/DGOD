import React, { useEffect, useState } from 'react';
import { FaHandshake, FaProjectDiagram, FaSmile } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import '../Styles/Count.css';

const Count = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    companies: 0,
    clients: 0
  });
  
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds for the animation
      const steps = 50; // Number of steps in the animation
      const interval = duration / steps;

      const targetCounts = {
        projects: 320,
        companies: 25,
        clients: 120
      };

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        
        setCounts({
          projects: Math.ceil((targetCounts.projects / steps) * currentStep),
          companies: Math.ceil((targetCounts.companies / steps) * currentStep),
          clients: Math.ceil((targetCounts.clients / steps) * currentStep)
        });

        if (currentStep === steps) {
          clearInterval(timer);
          setCounts(targetCounts);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [inView]);

  return (
    <section className="count-section">
      <div className="count-container" ref={ref}>
        <div className={`count-item ${inView ? 'animate' : ''}`}>
          <div className="count-icon">
            <FaProjectDiagram />
          </div>
          <h2 className="count-number">{counts.projects}+</h2>
          <p className="count-label">Complete Projects</p>
        </div>

        <div className={`count-item ${inView ? 'animate' : ''}`}>
          <div className="count-icon">
            <FaHandshake />
          </div>
          <h2 className="count-number">{counts.companies}+</h2>
          <p className="count-label">Cooperation Companies</p>
        </div>

        <div className={`count-item ${inView ? 'animate' : ''}`}>
          <div className="count-icon">
            <FaSmile />
          </div>
          <h2 className="count-number">{counts.clients}+</h2>
          <p className="count-label">Happy Clients</p>
        </div>
      </div>
    </section>
  );
};

export default Count;