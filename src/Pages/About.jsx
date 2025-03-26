import React from 'react';
import AboutUs from './Common/AboutUs';
import Footer from './Common/Footer';
import PageHeader from './Common/PageHeader';
import './Styles/About.css';
// Hero Section Component
import ClientsSection from './Common/ClientsSection';
import TestimonialsCom from './Common/TestimonialsCom';


// Main About Page Component
const About = () => {
  return (
    <>
      <div className="about-wrapper">
        <PageHeader title="About us" currentPage="About us" />
      </div>
          <AboutUs />
          <ClientsSection />
<TestimonialsCom />
      {/* <Count /> */}
      <Footer />
    </>
  );
};

export default About;