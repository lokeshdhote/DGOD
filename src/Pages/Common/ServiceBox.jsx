import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import '../Styles/ServiceBox.css';

gsap.registerPlugin(ScrollTrigger);

const ServiceBox = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    // Simple fade-in animation for header
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 90%",
        },
      }
    );

    // Simple fade-in animations for service items
    itemsRef.current.forEach((item) => {
      if (item) {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      }
    });

    // Clean up all ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="serviceComSection" ref={sectionRef}>
      <div className="serviceComContainer">
        <div className="serviceComHeader" ref={headerRef}>
          <span className="serviceComSubtitle">Our Expertise</span>
          <h2 className="serviceComTitle">Digital Solutions That Drive Results</h2>
        </div>

        <div className="serviceComGrid">
          {/* Google Ads Management */}
          <div className="serviceComItem" ref={el => itemsRef.current[0] = el}>
            <div className="serviceComContent">
              <div className="serviceComContentWrapper">
                <h3>Google Ads Management</h3>
                <p>We specialize exclusively in Google Ads, dedicating our expertise to crafting high-performing campaigns that drive real results.</p>
              </div>
            </div>
            <div className="serviceComImageWrapper">
              <div className="serviceComImage">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=509&h=332&fit=crop" 
                  alt="Digital Advertising" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>

          {/* Facebook/Instagram Ads Management */}
          <div className="serviceComItem reverse" ref={el => itemsRef.current[1] = el}>
            <div className="serviceComContent">
              <div className="serviceComContentWrapper">
                <h3>Meta Ads Management</h3>
                <p>Result-Driven Meta Ads Services for Facebook and Instagram, designed to maximize engagement and conversions for your business.</p>
              </div>
            </div>
            <div className="serviceComImageWrapper">
              <div className="serviceComImage">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=509&h=332&fit=crop" 
                  alt="Meta Ads" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>

          {/* Website Development */}
          <div className="serviceComItem" ref={el => itemsRef.current[2] = el}>
            <div className="serviceComContent">
              <div className="serviceComContentWrapper">
                <h3>Website Development</h3>
                <p>Boost your online presence with our Website Development services! We create stunning WordPress sites, powerful Shopify stores, and fully responsive designs tailored to your needs.</p>
              </div>
            </div>
            <div className="serviceComImageWrapper">
              <div className="serviceComImage">
                <img 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=509&h=332&fit=crop" 
                  alt="Website Development" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>

          {/* Youtube Promotion Services */}
          <div className="serviceComItem reverse" ref={el => itemsRef.current[3] = el}>
            <div className="serviceComContent">
              <div className="serviceComContentWrapper">
                <h3>Youtube Promotion Services</h3>
                <p>YouTube promotion services help you get more views, subscribers, and engagement on your YouTube channel. These services include video creation, SEO, and ad account setup.</p>
              </div>
            </div>
            <div className="serviceComImageWrapper">
              <div className="serviceComImage">
                <img 
                  src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=509&h=332&fit=crop" 
                  alt="Youtube Promotion" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>

          {/* Social Media Management */}
          <div className="serviceComItem" ref={el => itemsRef.current[4] = el}>
            <div className="serviceComContent">
              <div className="serviceComContentWrapper">
                <h3>Social Media Management</h3>
                <p>We create, curate, and manage engaging content across all platforms to grow your audience, boost engagement, and drive results. From strategy to execution, we handle it all—so you can focus on running your business.</p>
              </div>
            </div>
            <div className="serviceComImageWrapper">
              <div className="serviceComImage">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=509&h=332&fit=crop" 
                  alt="Social Media Management" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>

          {/* Google Business Profile SEO */}
          <div className="serviceComItem reverse" ref={el => itemsRef.current[5] = el}>
            <div className="serviceComContent">
              <div className="serviceComContentWrapper">
                <h3>Google Business Profile SEO</h3>
                <p>Expert GMB Management Services to boost your business growth and visibility. Comprehensive optimization to enhance local search presence and customer engagement.</p>
              </div>
            </div>
            <div className="serviceComImageWrapper">
              <div className="serviceComImage">
                <img 
                  src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=509&h=332&fit=crop" 
                  alt="Google Business Profile" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBox;