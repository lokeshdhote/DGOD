import React from 'react';
import Footer from './Common/Footer';
import PageHeader from './Common/PageHeader';
import ServiceBox from './Common/ServiceBox';
import './Styles/Services.css';
import TestimonialsCom from './Common/TestimonialsCom';

const Services = () => {
  return (
    <>
      <div className="services-wrapper">
        <PageHeader title="Our Services" currentPage="Our Services" />
      </div>
          <ServiceBox />
          <TestimonialsCom />
      <Footer />
    </>
  );
};

export default Services;