import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGoogle, FaFacebook, FaLaptopCode, FaYoutube, FaChartLine, FaMapMarkerAlt } from "react-icons/fa";
import '../Styles/ServiceBox.css'; // Import External CSS

gsap.registerPlugin(ScrollTrigger);

const ServiceBox = () => {
  const headerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Cards animation
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const services = [
    {
      icon: <FaGoogle className="serviceIcon" />,
      title: "Google Ads Management",
      desc: "We specialize exclusively in Google Ads, dedicating our expertise to crafting high-performing campaigns that drive real results.",
    },
    {
      icon: <FaFacebook className="serviceIcon" />,
      title: "Meta Ads Management",
      desc: "Result-Driven Meta Ads Services for Facebook and Instagram, designed to maximize engagement and conversions for your business.",
    },
    {
      icon: <FaLaptopCode className="serviceIcon" />,
      title: "Website Development",
      desc: "Boost your online presence with our Website Development services! We create stunning WordPress sites, powerful Shopify stores, and fully responsive designs tailored to your needs.",
    },
    {
      icon: <FaYoutube className="serviceIcon" />,
      title: "YouTube Promotion Services",
      desc: "YouTube promotion services help you get more views, subscribers, and engagement on your YouTube channel. These services include video creation, SEO, and ad account setup.",
    },
    {
      icon: <FaChartLine className="serviceIcon" />,
      title: "Social Media Management",
      desc: "We create, curate, and manage engaging content across all platforms to grow your audience, boost engagement, and drive results. From strategy to execution, we handle it all—so you can focus on running your business.",
    },
    {
      icon: <FaMapMarkerAlt className="serviceIcon" />,
      title: "Google Business Profile SEO",
      desc: "Expert GMB Management Services to boost your business growth and visibility. Comprehensive optimization to enhance local search presence and customer engagement.",
    },
  ];

  return (
    <section className="whyChooseSection">
      <div className="container">
        <div className="serviceComHeader" ref={headerRef}>
          <span className="serviceComSubtitle">Our Expertise</span>
          <h2 className="serviceComTitle">Digital Solutions That Drive Results</h2>
        </div>
        <div className="grid">
          {services.map((service, index) => (
            <div className="serviceBox" ref={(el) => (itemsRef.current[index] = el)} key={index}>
              <div className="serviceIconWrapper">{service.icon}</div>
              <div className="serviceContent">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBox;
