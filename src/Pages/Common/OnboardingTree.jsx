import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { FaSearch, FaClipboardList, FaCheckCircle, FaCogs, FaChartLine, FaTrophy } from "react-icons/fa"; // Import icons
import "../Styles/OnboardingTree.css";

const OnboardingTree = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      offset: 120,
      delay: 100,
    });

    const steps = document.querySelectorAll(".onboarding-steps .step");

    const checkScrollPosition = () => {
      steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;

        if (isVisible) {
          setTimeout(() => {
            step.classList.add("animate");
          }, index * 150);
        }
      });
    };

    window.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("load", checkScrollPosition);

    setTimeout(checkScrollPosition, 500);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("load", checkScrollPosition);
    };
  }, []);

  return (
    <div className="onboarding-steps">
      <div className="container">
        <div className="header">
          <h1 data-aos="fade-down">Steps To Onboard Clients</h1>
          <p className="subtitle" data-aos="fade-up">
            Our streamlined process ensures a smooth onboarding experience for all our digital marketing clients.
          </p>
        </div>

        <div className="timeline">
          {/* Step 1 */}
          <div className="step" data-aos="fade-right">
            <div className="step-content">
              <div className="step-icon"><FaSearch   /></div>
              <h2 className="step-title">Understanding</h2>
              <p className="step-description">
                For us, it is very important to understand the requirement of your business and accordingly provide customized solutions. We conduct detailed research to offer the best solution at an affordable cost.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="step" data-aos="fade-left">
            <div className="step-content">
              <div className="step-icon"><FaClipboardList   /></div>
              <h2 className="step-title">Process & Plan Formation</h2>
              <p className="step-description">
                Develop a detailed project plan outlining steps in website development or digital marketing campaigns. Define goals, timelines, and responsibilities for smooth execution.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="step" data-aos="fade-right">
            <div className="step-content">
              <div className="step-icon"><FaCheckCircle   /></div>
              <h2 className="step-title">Selecting Best Plan</h2>
              <p className="step-description">
                Based on requirements, we recommend the most suitable plan with estimated outcomes that fit within the client's budget, timeline, and goals.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="step" data-aos="fade-left">
            <div className="step-content">
              <div className="step-icon"><FaCogs   /></div>
              <h2 className="step-title">Execution and Implementation</h2>
              <p className="step-description">
                Execute the website development or digital marketing campaign per the agreed timeline. Coordination is done with the client for feedback and adjustments.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="step" data-aos="fade-right">
            <div className="step-content">
              <div className="step-icon"><FaChartLine   /></div>
              <h2 className="step-title">Monitoring & Optimization</h2>
              <p className="step-description">
                Monitor performance using analytics tools. Track key metrics like traffic, engagement, conversions, and ROI to ensure alignment with goals.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="step" data-aos="fade-left">
            <div className="step-content">
              <div className="step-icon"><FaTrophy  /></div>
              <h2 className="step-title">Final Outcome/Result</h2>
              <p className="step-description">
                Provide regular progress reports highlighting achievements and areas for improvement, ensuring measurable results such as increased traffic and better conversions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OnboardingTree;
