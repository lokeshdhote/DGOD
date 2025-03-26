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
    const section = sectionRef.current;
    const header = headerRef.current;
    const items = itemsRef.current;

    // Header animation
    gsap.fromTo(header.children,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: header,
          start: "top 80%",
        }
      }
    );

    // Service items animation
    items.forEach((item, index) => {
      const direction = item.classList.contains('reverse') ? -1 : 1;
      
      gsap.fromTo(item,
        {
          x: 100 * direction,
          opacity: 0,
          scale: 0.95
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Content animation
      gsap.fromTo(item.querySelector('.serviceComContentWrapper').children,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Image animation
      gsap.fromTo(item.querySelector('.serviceComImage'),
        {
          scale: 0.8,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="serviceComSection" ref={sectionRef}>
      <div className="serviceComContainer">
        <div className="serviceComHeader" ref={headerRef}>
          <span className="serviceComSubtitle">Our Service</span>
          <h2 className="serviceComTitle">What Can We Bring for You</h2>
        </div>

        <div className="serviceComGrid">
          {/* Consultant Plan */}
          <div className="serviceComItem" ref={el => itemsRef.current[0] = el}>
            <div className="serviceComContent">
              <div className="serviceComContentWrapper">
                <div className="serviceComIcon">
                  <img 
                    src="data:image/svg+xml,%3Csvg fill='%23FF9533' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2V7h-4v2h2v8z'/%3E%3C/svg%3E" 
                    alt="Consultant icon" 
                  />
                </div>
                <h3>Google Ads Management</h3>
                <p>We specialize exclusively in Google Ads, dedicating my expertise to crafting high-performing campaigns that drive real results. & <strong>
Facebook/Instagram Ads Management - 
</strong>Result-Driven <strong>Meta Ads Services </strong> </p>
              </div>
            </div>
            <div className="serviceComImageWrapper">
              <div className="serviceComImage">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=509&h=332&fit=crop" 
                  alt="Consultant Planning" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>

          {/* Design Thinking First */}
          <div className="serviceComItem reverse" ref={el => itemsRef.current[1] = el}>
            <div className="serviceComContent">
              <div className="serviceComContentWrapper">
                <div className="serviceComIcon">
                  <img 
                    src="data:image/svg+xml,%3Csvg fill='%23FF9533' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M3 3h18v2H3V3zm0 8h18v2H3v-2zm0 8h18v2H3v-2z'/%3E%3C/svg%3E" 
                    alt="Design icon" 
                  />
                </div>
                <h3>Website Development </h3>
                <p>Boost your online presence with our  <strong>Website Development </strong>services! We create stunning <strong>WordPress</strong> sites, powerful <strong>Shopify</strong>stores, and fully  </p>
              </div>
            </div>
            <div className="serviceComImageWrapper">
              <div className="serviceComImage">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=509&h=332&fit=crop" 
                  alt="Design Thinking Process" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>

          {/* SEO Marketing */}
          <div className="serviceComItem" ref={el => itemsRef.current[2] = el}>
            <div className="serviceComContent">
              <div className="serviceComContentWrapper">
                <div className="serviceComIcon">
                  <img 
                    src="data:image/svg+xml,%3Csvg fill='%23FF9533' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/svg%3E" 
                    alt="SEO icon" 
                  />
                </div>
                <h3>Custom Web Solutions </h3>
                <p>tailored to your needs. Fast, responsive, and designed to grow your business—let’s build something amazing together! </p>
              </div>
            </div>
            <div className="serviceComImageWrapper">
              <div className="serviceComImage">
                <img 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=509&h=332&fit=crop" 
                  alt="SEO Marketing" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>

          {/* Business Advisor */}
          <div className="serviceComItem reverse" ref={el => itemsRef.current[3] = el}>
            <div className="serviceComContent">
              <div className="serviceComContentWrapper">
                <div className="serviceComIcon">
                  <img 
                    src="data:image/svg+xml,%3Csvg fill='%23FF9533' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5-2v2H9V4h6zM4 20V8h16v12H4z'/%3E%3C/svg%3E" 
                    alt="Business icon" 
                  />
                </div>
                <h3>Google Business Profile SEO </h3>
                <p>Expert GMB Management Services Boost Your Business Growth and Visibility </p>
              </div>
            </div>
            <div className="serviceComImageWrapper">
              <div className="serviceComImage">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=509&h=332&fit=crop" 
                  alt="Business Advisor" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>

          {/* Brand Personal */}
          <div className="serviceComItem" ref={el => itemsRef.current[4] = el}>
            <div className="serviceComContent">
              <div className="serviceComContentWrapper">
                <div className="serviceComIcon">
                  <img 
                    src="data:image/svg+xml,%3Csvg fill='%23FF9533' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/%3E%3C/svg%3E" 
                    alt="Brand icon" 
                  />
                </div>
                <h3>Youtube Promotion Services </h3>
                <p>YouTube promotion services help you get more views, subscribers, and engagement on your YouTube channel. These services may include video creation, SEO, and ad account setup.  </p>
              </div>
            </div>
            <div className="serviceComImageWrapper">
              <div className="serviceComImage">
                <img 
                  src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=509&h=332&fit=crop" 
                  alt="Brand Personal" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>

          {/* Design Thinking Second */}
          <div className="serviceComItem reverse" ref={el => itemsRef.current[5] = el}>
            <div className="serviceComContent">
              <div className="serviceComContentWrapper">
                <div className="serviceComIcon">
                  <img 
                    src="data:image/svg+xml,%3Csvg fill='%23FF9533' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M3 3h18v2H3V3zm0 8h18v2H3v-2zm0 8h18v2H3v-2z'/%3E%3C/svg%3E" 
                    alt="Design icon" 
                  />
                </div>
                <h3>Social Media Management </h3>
                <p>We create, curate, and manage engaging content across all platforms to grow your audience, boost engagement, and drive results. From strategy to execution, we handle it all—so you can focus on running your business. Let’s make your social media shine! </p>
              </div>
            </div>
            <div className="serviceComImageWrapper">
              <div className="serviceComImage">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=509&h=332&fit=crop" 
                  alt="Design Thinking" 
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
