import React from 'react';
import '../Styles/Testimonials.css';

const TestimonialsCom = () => {
  const testimonials = [
    {
      id: 1,
      image: "https://i.pravatar.cc/150?img=1",
      text: "Lorem ipsum dolor sit amet, consect etur adipiscing elit",
      author: "@jennifer.a"
    },
    {
      id: 2,
      image: "https://i.pravatar.cc/150?img=2",
      text: "I just love how these people build this system",
      author: "@jamescron"
    },
    {
      id: 3,
      image: "https://i.pravatar.cc/150?img=3",
      text: "A must have UI kit for building my landing pages",
      author: "@camerondi"
    },
    {
      id: 4,
      image: "https://i.pravatar.cc/150?img=4",
      text: "I just love how these people build this system",
      author: "@alexborm"
    },
    {
      id: 5,
      image: "https://i.pravatar.cc/150?img=5",
      text: "A must have UI kit for building my landing pages",
      author: "@martina"
    },
    {
      id: 6,
      image: "https://i.pravatar.cc/150?img=6",
      text: "Lorem ipsum dolor sit amet, consect etur adipiscing elit",
      author: "@christin.ja"
    }
  ];

  return (
    <div className="testimonials-section">
      <div className="testimonials-header">
        <h3 className="subtitle">Testimonials</h3>
        <h2 className="title">Our happy clients say about us</h2>
      </div>

      <div className="testimonials-container">
        <div className="scroll-container">
          {/* Double the testimonials for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className="testimonial-card">
              <div className="testimonial-content">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="testimonial-image"
                />
                <p className="testimonial-author">{testimonial.author}</p>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCom;