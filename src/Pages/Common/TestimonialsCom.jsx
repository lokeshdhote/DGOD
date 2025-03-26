import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Styles/Testimonials.css"; // Import the CSS file

const TestimonialsCom = () => {
  return (
    <div className="testimonial-section">
      <div className="header">
        <div className="header-label">Our Testimonials</div>
        <h2 className="header-title">
          What Our <span>Clients</span> Say About Us
        </h2>
      </div>

      <div className="testimonial-slider">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000, // Faster scrolling speed
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3, // Show only 3 pagination dots
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="testimonialSwiper"
        >
          {/* Testimonial 1 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="quote-icon">&ldquo;</div>
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-content">
                "We have been working with ADGOD360 for our digital communication
                needs for almost a year now, and we couldn't be happier with the
                results. Their team has been exceptional in understanding our
                brand and communicating our message effectively to our target
                audience. They have provided us with top-notch digital marketing
                solutions, including social media management that have helped us
                increase our online presence and attract new customers. We
                appreciate their commitment to delivering quality work & highly
                recommend ADGOD360 to anyone looking for a reliable and
                results-driven digital communication agency."
              </p>
              <div className="testimonial-author">Sneh Thanvi</div>
              <div className="testimonial-position">
                Brand & Communication Marketing Manager - Western Refrigeration
                Pvt Ltd
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 2 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="quote-icon">&ldquo;</div>
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-content">
                "We’re working with ADGOD360 since the past 5 years for our lead
                generation & Social Media branding activities. ADGOD360 has an
                amazing performance-driven team and we’ve been getting a very
                good ROI on our spends. They have been able to consistently
                improve key metrics. Keep it up!"
              </p>
              <div className="testimonial-author">Nipun Agrawal</div>
              <div className="testimonial-position">
                Marketing Head - BMW Navnit Group
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 3 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="quote-icon">&ldquo;</div>
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-content">
                "ADGOD360 is a team of young and dedicated professionals. They
                have helped us take our social media design to a markedly better
                level. They are flexible and cooperative. I wish all the best to
                the team."
              </p>
              <div className="testimonial-author">Satrajit Basu</div>
              <div className="testimonial-position">
                Marcom Manager - Rambandhu
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 4 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="quote-icon">&ldquo;</div>
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-content">
                "I would strongly recommend ADGOD360 for their creative design
                and brand awareness campaigns. Their team proactively provides
                inputs in marketing initiatives and shares insightful strategies.
                The agency is an excellent growth partner to work with and
                well-responsive."
              </p>
              <div className="testimonial-author">Lakhi Chowdhary</div>
              <div className="testimonial-position">Business Head - CDP</div>
            </div>
          </SwiperSlide>

          {/* Testimonial 5 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="quote-icon">&ldquo;</div>
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-content">
                "It is very rare to find a talent like the ADGOD360 team and I
                have been particularly impressed with their industry knowledge
                and attention to detail. Their customer service is second to
                none and earns my highest recommendation."
              </p>
              <div className="testimonial-author">George Panagios</div>
              <div className="testimonial-position">
                Director - QBID Australia
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 6 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="quote-icon">&ldquo;</div>
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-content">
                "We engaged ADGOD360 for an integrated digital marketing campaign
                for Voltas Water. With some clear problem statements in my mind,
                I was looking for someone who could deliver, not just words, but
                numbers too. It was great to work with a young team high on
                passion to give their best to the account. All the best!"
              </p>
              <div className="testimonial-author">Satish Shankar</div>
              <div className="testimonial-position">
                Marketing Manager - Voltas Water
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 7 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="quote-icon">&ldquo;</div>
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-content">
                "I have been working with ADGOD360 as my marketing partner for
                over 3 years now. I have loved some of their creatives (both
                offline & online ones) that we got done from them. Their
                performance in SEO currently helps us generate leads & inquiries
                on a daily basis on our website. All the best to the whole team!"
              </p>
              <div className="testimonial-author">Priyanka Nair</div>
              <div className="testimonial-position">
                Brand Manager - Pressto India
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 8 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="quote-icon">&ldquo;</div>
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-content">
                "Young Volunteer's Organization encourages young netizens to
                donate as little as Rs. 306 on a monthly basis to create a big
                impact. We needed a partner who could empathize well with the
                issues at hand.. ADGOD360 delivered quite that experience on our
                social media handles with great creatives and campaign ideas.
                Good luck to the whole team!"
              </p>
              <div className="testimonial-author">Siddharth Ladsariya</div>
              <div className="testimonial-position">Founder - YVO</div>
            </div>
          </SwiperSlide>

          {/* Testimonial 9 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="quote-icon">&ldquo;</div>
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-content">
                "I associated with ADGOD360 for the SEO campaigns we were
                planning to run for Business Standard. In a highly competitive &
                sensitive space of publications in India, Business Standard has
                always been one of the best and we wanted to consistently hold on
                to that position and grow via our organic traffic. ADGOD360 had a
                good response time to all our jobs and activities and it proved
                helpful. All the best!"
              </p>
              <div className="testimonial-author">Ileena Fernandes</div>
              <div className="testimonial-position">
                Marketing Manager - Business Standard
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 10 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="quote-icon">&ldquo;</div>
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-content">
                "Owning the largest fleet of Uber taxis in India and growing
                consistently every day requires a partner who's as hungry for
                growth as you are. We handed our marketing operations to ADGOD360
                to come up with interesting creative campaigns to attract fellow
                drivers who'd want to join our fleet. They've lived up to our
                expectations so far and helped in our journey of scaling up."
              </p>
              <div className="testimonial-author">Anand Chedda</div>
              <div className="testimonial-position">
                Founder - Everest Fleet
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 11 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="quote-icon">&ldquo;</div>
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-content">
                "ADGOD360 is a team of enthusiastic and dedicated digital
                marketers. Being a full service agency, they have the
                capabilities to fulfill almost every marketing and communication
                requirement. The most noteworthy aspect about them is that they
                work as part of your marketing team and not just as an external
                partner. They have been a dependable partner for the group across
                ventures."
              </p>
              <div className="testimonial-author">Archna Lalwani</div>
              <div className="testimonial-position">
                AVP Marketing and Communications - Raintree Family Office
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 12 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="quote-icon">&ldquo;</div>
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-content">
                "ADGOD360 has elevated our social media presence with smart,
                targeted strategies that have made a tangible difference. Our
                engagement and brand visibility have seen a noticeable boost, and
                they truly understand how to connect with our audience. We’re
                extremely satisfied with the results and value this partnership
                highly!"
              </p>
              <div className="testimonial-author">Siddharth Agarwal</div>
              <div className="testimonial-position">
                Head of Marketing & E-commerce - Meal of the Moment
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 13 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="quote-icon">&ldquo;</div>
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-content">
                "We've been partnering with ADGOD360 on our website's SEO for
                over 6 years now and have seen notable improvements in our search
                engine rankings, particularly for key relevant terms. Their
                expertise and strategic recommendations have positively impacted
                our online presence and driven better rankings for relevant
                keywords. Our goals for this year are to be more aggressive with
                enhancing our website’s authority and overall reach, and we look
                forward to how ADGOD360 is able to meet our goals in this
                direction."
              </p>
              <div className="testimonial-author">Dhruv Ajmera</div>
              <div className="testimonial-position">
                Director - Ajmera Group of Companies
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 14 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="quote-icon">&ldquo;</div>
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-content">
                "We worked with ADGOD360 for our website development, and the
                experience was great. Their supportive team provided excellent
                service throughout the project—from content creation to design.
                We now have a user-friendly and visually appealing website that
                has significantly enhanced our online presence. We’re currently
                working with them again for further development, and their
                service continues to improve. They’ve added more resources to
                ensure a seamless process, making the entire experience even more
                rewarding."
              </p>
              <div className="testimonial-author">Khushboo & Dhruvi Dadia</div>
              <div className="testimonial-position">Team CFX Inks</div>
            </div>
          </SwiperSlide>

          {/* Testimonial 15 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="quote-icon">&ldquo;</div>
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-content">
                "I can't say enough about how amazing the team at ADGOD360 has
                been! Their strategic approach to social media has not only
                increased our online presence but also boosted our engagement and
                brand awareness. From content creation to campaign management,
                everything is handled with such professionalism and creativity.
                We've seen real, measurable results, and the communication
                throughout has been fantastic. If you're looking for a social
                media partner that truly understands your goals and delivers on
                their promises, look no further than ADGOD360. Highly
                recommended!"
              </p>
              <div className="testimonial-author">Pankaj Sharma</div>
              <div className="testimonial-position">COO - Sandwizzaa</div>
            </div>
          </SwiperSlide>

          {/* Testimonial 16 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="quote-icon">&ldquo;</div>
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-content">
                "A heartfelt thank you to the ADGOD360 team for their dedication
                and commitment throughout the project. Their consistent efforts
                in overcoming challenges and delivering a seamless platform have
                truly exceeded our expectations."
              </p>
              <div className="testimonial-author">Shama Acharya</div>
              <div className="testimonial-position">
                DGM- Respiratory | Wings to Breathe LUPIN LIMITED
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Navigation Arrows */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default TestimonialsCom;