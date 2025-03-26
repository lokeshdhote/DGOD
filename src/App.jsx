import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import ScrollToTop from "./Pages/Common/ScrollToTop"; // Import ScrollToTop button
import ScrollToTopOnNavigate from "./Pages/Common/ScrollToTopOnNavigate"; // Import
import WhatsAppChat from "./Pages/Common/WhatsAppChat"; // Import WhatsApp component
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Services from './Pages/Services';
import Works from './Pages/Works';

const App = () => {
  return (
      <BrowserRouter>
          <ScrollToTopOnNavigate />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
          </Routes>
          <WhatsAppChat /> 
           <ScrollToTop />
    </BrowserRouter>
  );
};

export default App;
