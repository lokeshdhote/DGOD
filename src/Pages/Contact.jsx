import React from 'react';
import '../Pages/Styles/Contactmain.css';
import ContactForm from './Common/ContactForm';
import Footer from './Common/Footer';
import PageHeader from './Common/PageHeader';
import LogoScrolling from './Common/TrustedClients';

const Contact = () => {
  return (
    <div className="contactmain-container">
      <PageHeader title="Contact us" currentPage="Contact us" />
      <ContactForm />
      <LogoScrolling />
      <Footer />
    </div>
  );
};

export default Contact;