import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Styles/ServicesSectionCom.css"; // Import the CSS file
import Rectangle705 from '../../assets/images/Rectangle 705.png';
import Rectangle706 from '../../assets/images/Rectangle 706.png';
import Rectangle708 from '../../assets/images/Rectangle 708.png';
import Rectangle710 from '../../assets/images/Rectangle 710.png';

const ServiceSetion = () => {
  const projects = [
    {
      id: 1,
      title: "Food Delivery App",
      description: "Custom food delivery platform with real-time tracking.",
      image: Rectangle705, 
    },
    {
      id: 2,
      title: "Restaurant Management System",
      description: "All-in-one solution for restaurant operations.",
      image: Rectangle706,
    },
    {
      id: 3,
      title: "Cloud Kitchen Platform",
      description: "Digital platform for virtual restaurant businesses.",
      image: Rectangle708,
    },
    {
      id: 4,
      title: "Grocery Delivery App",
      description: "Seamless online grocery shopping experience.",
      image: Rectangle710,
    },
  ];

  return (
    <section className="services-section">
      <div className="section-header">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">
             Discover our innovative digital solutions that have transformed businesses across various industries.
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="services-carousel"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="service-card">
              <div className="service-card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="service-card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href="#" className="view-more-btn">
                  View More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServiceSetion;
