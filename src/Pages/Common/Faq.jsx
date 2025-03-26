import React, { useState } from "react";
import "../Styles/Faq.css"; // Import the CSS file for styling

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What services does ADGOD360 offer?",
      answer:
        "We offer a comprehensive range of digital marketing solutions, including SEO, Google Ads, Facebook Ads, Social Media Management, Website Design, and Google My Business optimization. Our goal is to help businesses establish a strong online presence and drive targeted leads.",
    },
    {
      question: "How long does it take to see results from digital marketing campaigns?",
      answer:
        "While some campaigns (like paid ads) can show immediate results, SEO and other organic strategies typically take 2–3 months to demonstrate significant improvement. We work with you to set realistic timelines and monitor progress every step of the way.",
    },
    {
      question: "Do you provide customized marketing strategies?",
      answer:
        "Absolutely. We believe every business is unique. Our team conducts a thorough analysis of your goals, target audience, and competition to create a tailored marketing plan that aligns with your specific needs and budget.",
    },
    {
      question: "How do I track the progress of my campaigns?",
      answer:
        "We provide regular reports and analytics, including key performance indicators (KPIs) like website traffic, lead conversions, and ad performance. Additionally, you’ll have access to a dedicated account manager who can answer questions and provide updates.",
    },
    {
      question: "Can you help with Google My Business (GMB) setup and optimization?",
      answer:
        "Yes, we specialize in GMB setup, verification, and optimization. This includes creating and optimizing your business profile, managing reviews, and implementing strategies to boost your local search ranking.",
    },
    {
      question: "Do you offer website design and development services?",
      answer:
        "Yes, we offer website design services to help businesses build a modern, user-friendly website that aligns with their brand. From layout and design to content management and SEO optimization, we cover all aspects to ensure your site drives results.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing depends on the specific services you choose and the scope of work. We offer monthly retainers for ongoing services like SEO, Social Media Management, and Ads, as well as one-time fees for services such as Website Design. Contact us for a customized quote.",
    },
    {
      question: "Is there a minimum contract length for your services?",
      answer:
        "While we recommend a minimum of three to six months for best results, especially for SEO, we offer flexible plans to accommodate different business needs. We’ll work with you to find a plan that suits your goals and budget.",
    },
    {
      question: "Will I have a dedicated account manager?",
      answer:
        "Yes. We assign a dedicated account manager to each client to ensure seamless communication and consistent support throughout your engagement with us.",
    },
    {
      question: "How do I get started with ADGOD360?",
      answer:
        "Getting started is easy. Simply contact us via phone, email, or our website’s contact form. We’ll set up an initial consultation to understand your business goals and create a custom strategy for your success.",
    },
  ];

  return (
    <div className="container">
      <h1 className="FAQ">Frequently Asked Questions (FAQ)</h1>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">
            <span>{faq.question}</span>
            <button className="faq-toggle">
              {activeIndex === index ? "−" : "+"}
            </button>
          </div>
          <div
            className={`faq-answer ${activeIndex === index ? "active" : ""}`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;