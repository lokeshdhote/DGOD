import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import '../Styles/Testimonials.css'; // External CSS

const Testimonials = () => {
  const testimonials = [
    {
      company: "LinkedIn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      content:
        "The work Digital Vidya does is very important to help traditional companies and marketers reinvent themselves to become digital.",
      name: "Virginia Sharma",
      position: "EX - Director, LinkedIn Marketing Solutions",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      company: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      content:
        "Digital Vidya is doing a great job in making everyone digital ready!",
      name: "Aparna Lal",
      position: "Marketing Lead, Global Demand Center",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      company: "Facebook",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      content:
        "Digital Vidya is leading by example and doing some great work in the field of digital marketing.",
      name: "Sakhee Dheer",
      position: "EX - Digital Marketing Lead",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      company: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      content:
        "Google appreciates the way Digital Vidya empowers marketers with digital knowledge!",
      name: "Rahul Batra",
      position: "Senior Marketing Strategist",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      company: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      content:
        "Amazon has seen a great impact in digital marketing with the help of Digital Vidya's training programs.",
      name: "Monica Gupta",
      position: "Head of Digital Strategy",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      company: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      content:
        "Apple values Digital Vidya's training to help marketers become more innovative.",
      name: "Jonathan Smith",
      position: "Creative Director",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  ];

  return (
    <div className="testimonial-container">
      <div className="testimonial-section">
        <div className="header">
          <div className="header-label">Our Testimonials</div>
          <h2 className="header-title">
            What Our <span>Clients</span> Say About Us
          </h2>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40} // Adds spacing between testimonial boxes
        slidesPerView={1} // Default for mobile
        breakpoints={{
          768: { slidesPerView: 2 }, // Tablets
          1024: { slidesPerView: 3 }, // Large screens
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="testimonial-slider"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="company-logo">
                <img src={testimonial.logo} alt={testimonial.company} />
              </div>
              <p className="testimonial-text">“{testimonial.content}”</p>
              <div className="testimonial-footer">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="author-image"
                />
                <div>
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
