// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import React, { useEffect } from 'react';
// import ClientsSection from './Common/ClientsSection';
// import ContactForm from './Common/ContactForm';
// import Faq from './Common/Faq';
// import Footer from './Common/Footer';
// import Hero from './Common/Hero';
// import OnboardingTree from './Common/OnboardingTree';
// import Portfolio from './Common/Portfolio';
// import Post from './Common/Post';
// import ServiceBox from './Common/ServiceBox';
// import TestimonialsCom from './Common/TestimonialsCom';
// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const Home = () => {
//   useEffect(() => {
//     // Fade in animation for each section except services
//     const sections = [
//       '.trusted-clients',
//       '.about-container',
//       '.projects-section',
//       '.testimonials-section',
//       '.contact-section',
//       'footer'
//     ];

//     sections.forEach((section) => {
//       gsap.fromTo(
//         section,
//         {
//           opacity: 0,
//           y: 30
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: 'power2.out',
//           scrollTrigger: {
//             trigger: section,
//             start: 'top 80%',
//             end: 'top 50%',
//             toggleActions: 'play none none reverse'
//           }
//         }
//       );
//     });

//     // Add parallax effect to about section image
//     gsap.to('.about-image', {
//       y: 50,
//       ease: 'none',
//       scrollTrigger: {
//         trigger: '.about-container',
//         start: 'top bottom',
//         end: 'bottom top',
//         scrub: 1
//       }
//     });

//     // Animate entire services section
//     gsap.fromTo(
//       '.services-section',
//       {
//         opacity: 0,
//         y: 60,
//         scale: 0.95
//       },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         duration: 1.2,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: '.services-section',
//           start: 'top 80%',
//           end: 'top 30%',
//           scrub: 1,
//           toggleActions: 'play none none reverse'
//         }
//       }
//     );

//     // Add a subtle background scale effect for services section
//     gsap.fromTo(
//       '.services-container',
//       {
//         scale: 0.98,
//         opacity: 0.8
//       },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 1.5,
//         ease: 'power2.inOut',
//         scrollTrigger: {
//           trigger: '.services-section',
//           start: 'top 80%',
//           end: 'top 30%',
//           scrub: 1,
//           toggleActions: 'play none none reverse'
//         }
//       }
//     );

//     // Stagger animation for project cards
//     gsap.utils.toArray('.project-card').forEach((card) => {
//       gsap.fromTo(
//         card,
//         {
//           opacity: 0,
//           scale: 0.95
//         },
//         {
//           opacity: 1,
//           scale: 1,
//           duration: 0.8,
//           scrollTrigger: {
//             trigger: card,
//             start: 'top 85%',
//             toggleActions: 'play none none reverse'
//           }
//         }
//       );
//     });

//     // Animate testimonial cards with stagger
//     const testimonialRows = document.querySelectorAll('.scroll-container');
//     testimonialRows.forEach((row) => {
//       gsap.fromTo(
//         row.children,
//         {
//           opacity: 0,
//           x: -30
//         },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 0.8,
//           stagger: 0.1,
//           scrollTrigger: {
//             trigger: row,
//             start: 'top 85%',
//             toggleActions: 'play none none reverse'
//           }
//         }
//       );
//     });

//     // Contact section reveal animation
//     gsap.fromTo(
//       '.contact-content',
//       {
//         opacity: 0,
//         x: 50
//       },
//       {
//         opacity: 1,
//         x: 0,
//         duration: 1,
//         scrollTrigger: {
//           trigger: '.contact-section',
//           start: 'top 75%',
//           toggleActions: 'play none none reverse'
//         }
//       }
//     );

//     // Footer sections stagger animation
//     gsap.fromTo(
//       '.footer-section',
//       {
//         opacity: 0,
//         y: 20
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: 'footer',
//           start: 'top 85%',
//           toggleActions: 'play none none reverse'
//         }
//       }
//     );

//   }, []);

//   return (
//     <div>
//           <Hero />
//       <ServiceBox />
//           <ClientsSection />
//           {/* <ServiceSetion /> */}
//           <Portfolio />
//           <TestimonialsCom />
//    <OnboardingTree />
//           <Post />
//           <Faq />
//           <ContactForm />
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';
import ClientsSection from './Common/ClientsSection';
import ContactForm from './Common/ContactForm';
import Faq from './Common/Faq';
import Footer from './Common/Footer';
import Hero from './Common/Hero';
import OnboardingTree from './Common/OnboardingTree';
import Post from './Common/Post';
import ServiceBox from './Common/ServiceBox';
import TestimonialsCom from './Common/TestimonialsCom';
import Work from './Common/Work';
import './Styles/Home.css';
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Import fonts (add this to your project)
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

const Home = () => {
  useEffect(() => {
    // Enhanced animation sequences
    
    // Hero section entrance animation
    gsap.fromTo(
      '.hero-content',
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3
      }
    );
    
    // Services section with staggered entrance
    gsap.utils.toArray('.service-card').forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.1 * index,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.services-section',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Fade in animation for each section with improved timing
    const sections = [
      '.trusted-clients',
      '.portfolio-section',
      '.testimonials-section',
      '.onboarding-tree-section',
      '.post-section',
      '.faq-section',
      '.contact-section',
      'footer'
    ];

    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Add parallax effect to selected images
    gsap.utils.toArray('.parallax-image').forEach((image) => {
      gsap.to(image, {
        y: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: image.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    });

    // Stagger animation for project cards with improved visuals
    gsap.utils.toArray('.project-card').forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          scale: 0.97,
          y: 20
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          delay: 0.1 * (index % 3), // Stagger by row
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Animate testimonial cards with improved stagger
    const testimonialRows = document.querySelectorAll('.scroll-container');
    testimonialRows.forEach((row) => {
      gsap.fromTo(
        row.children,
        {
          opacity: 0,
          x: -20,
          scale: 0.95
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Contact section reveal animation
    gsap.fromTo(
      '.contact-content',
      {
        opacity: 0,
        x: 30
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Footer sections stagger animation
    gsap.fromTo(
      '.footer-section',
      {
        opacity: 0,
        y: 15
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

  }, []);

  return (
    <div className="font-sans"> {/* Apply base font to entire app */}
      {/* Hero Section - First impression */}
      <section className="hero-section">
        <Hero />
      </section>
      
      {/* Services Section - What we offer */}
      <section className="services-section py-16">
        <ServiceBox />
      </section>
      
      {/* Clients Section - Social proof */}
      <section className="trusted-clients py-12 bg-gray-50">
        <ClientsSection />
      </section>
      
      {/* Portfolio Section - Showcase work */}
      <section className="portfolio-section ">
        <Work />
      </section>
      
      {/* Testimonials - Additional social proof */}
      <section className="testimonials-section py-16 bg-gray-50">
        <TestimonialsCom />
      </section>
      
      {/* Onboarding Process - Build trust */}
      <section className="onboarding-tree-section py-16">
        <OnboardingTree />
      </section>
      
      {/* Blog Posts - Showcase expertise */}
      <section className="post-section py-16 bg-gray-50">
        <Post />
      </section>
      
       {/* Contact Form - Call to action */}
       <section className="contact-section py-16 bg-gray-50">
        <ContactForm />
      </section>
      {/* FAQ Section - Address common questions */}
      <section className="faq-section py-16">
        <Faq />
      </section>
      
     
      
      {/* Footer - Navigation and info */}
      <Footer />
    </div>
  );
};

export default Home;