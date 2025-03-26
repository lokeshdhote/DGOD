import React from 'react';
import '../Pages/Styles/Work.css';
import Footer from './Common/Footer';
import PageHeader from './Common/PageHeader';
import Portfolio from './Common/Portfolio';
import TestimonialsCom from './Common/TestimonialsCom';
const Works = () => {
  return (
    <div className="works-page">
      <PageHeader title="Our Projects" currentPage="Our Projects" />
          <div className="content-section">
             <Portfolio />
              
      </div>
      <div className="content-section">
<TestimonialsCom />
          </div>
      <div className="content-section">
        <Footer />
      </div>
    </div>
  );
};

export default Works;