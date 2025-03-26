// import AOS from "aos";
// import "aos/dist/aos.css";
// import React, { useEffect } from "react";
// import "../Styles/OnboardingTree.css";

// const OnboardingTree = () => {
//   useEffect(() => {
//     // Initialize AOS animation library
//     AOS.init({
//       duration: 1000,
//       once: true,
//       mirror: false,
//       offset: 120,
//       delay: 100,
//     });

//     // Enhanced scroll-based animations for sequential appearance
//     const steps = document.querySelectorAll(".onboarding-steps .step");

//     const checkScrollPosition = () => {
//       steps.forEach((step, index) => {
//         const rect = step.getBoundingClientRect();
//         const isVisible = rect.top < window.innerHeight * 0.8;

//         if (isVisible) {
//           setTimeout(() => {
//             step.classList.add("animate");
//             const stepNumber = step.querySelector(".step-number");
//             if (stepNumber) {
//               stepNumber.classList.add("pulse");
//             }
//           }, index * 150); // Sequential delay
//         }
//       });
//     };

//     // Check positions on load and scroll
//     window.addEventListener("scroll", checkScrollPosition);
//     window.addEventListener("load", checkScrollPosition);

//     // Trigger initial check after a short delay
//     setTimeout(checkScrollPosition, 500);

//     // Cleanup event listeners
//     return () => {
//       window.removeEventListener("scroll", checkScrollPosition);
//       window.removeEventListener("load", checkScrollPosition);
//     };
//   }, []);

//   return (
//     <div className="onboarding-steps">
//       <div className="container">
//         <div className="header">
//           <h1 data-aos="fade-down" data-aos-duration="1000">
//             Steps To Onboard Client's
//           </h1>
//           <p
//             className="subtitle"
//             data-aos="fade-up"
//             data-aos-duration="1000"
//             data-aos-delay="300"
//           >
//             Our streamlined process ensures a smooth onboarding experience for all
//             our digital marketing clients
//           </p>
//         </div>

//         <div className="timeline">
//           <div
//             className="step"
//             data-aos="fade-right"
//             data-aos-duration="1000"
//             data-aos-anchor-placement="top-center"
//           >
//             <div className="step-content">
//               <div className="step-number pulse">1</div>
//               <h2 className="step-title">Understanding</h2>
//               <p className="step-description">
//                 For us it is very important to understand the requirement of your
//                 business and accordingly we will give you customized solutions. We
//                 accomplish detailed research to understand your project to provide
//                 you with the best solution at an affordable cost.
//               </p>
//             </div>
//           </div>

//           <div
//             className="step"
//             data-aos="fade-left"
//             data-aos-duration="1000"
//             data-aos-anchor-placement="top-center"
//           >
//             <div className="step-content">
//               <div className="step-number pulse">2</div>
//               <h2 className="step-title">Process & Plan Formation</h2>
//               <p className="step-description">
//                 Develop a detailed project plan detailing the steps involved in
//                 website development or digital marketing campaign. Define goals,
//                 timelines, and responsibilities to ensure a smooth execution
//                 process.
//               </p>
//             </div>
//           </div>

//           <div
//             className="step"
//             data-aos="fade-right"
//             data-aos-duration="1000"
//             data-aos-anchor-placement="top-center"
//           >
//             <div className="step-content">
//               <div className="step-number pulse">3</div>
//               <h2 className="step-title">Selecting Best Plan</h2>
//               <p className="step-description">
//                 Based on the gathered requirements and project scope, recommend
//                 the most suitable website development or digital marketing plan
//                 with estimated outcomes. Selecting the plan to fit within the
//                 client's budget, timeline, and desired outcomes.
//               </p>
//             </div>
//           </div>

//           <div
//             className="step"
//             data-aos="fade-left"
//             data-aos-duration="1000"
//             data-aos-anchor-placement="top-center"
//           >
//             <div className="step-content">
//               <div className="step-number pulse">4</div>
//               <h2 className="step-title">Execution and Implementation</h2>
//               <p className="step-description">
//                 Executing the website development or digital marketing campaign
//                 according to the agreed-upon timeline and specifications.
//                 Coordination is done with the client to gather feedback and make
//                 necessary adjustments throughout the process.
//               </p>
//             </div>
//           </div>

//           <div
//             className="step"
//             data-aos="fade-right"
//             data-aos-duration="1000"
//             data-aos-anchor-placement="top-center"
//           >
//             <div className="step-content">
//               <div className="step-number pulse">5</div>
//               <h2 className="step-title">Monitoring & Optimization</h2>
//               <p className="step-description">
//                 Monitor the performance of the website or digital marketing
//                 campaign using analytics and reporting tools. Analyze key metrics
//                 such as traffic, engagement, conversions, and ROI to track
//                 progress towards the defined goals.
//               </p>
//             </div>
//           </div>

//           <div
//             className="step"
//             data-aos="fade-left"
//             data-aos-duration="1000"
//             data-aos-anchor-placement="top-center"
//           >
//             <div className="step-content">
//               <div className="step-number pulse">6</div>
//               <h2 className="step-title">Final Outcome/Result</h2>
//               <p className="step-description">
//                 Provide regular progress reports to the client, highlighting
//                 achievements, challenges, and areas for improvement. Results
//                 Oriented approach such as increased traffic, higher search
//                 rankings, improved conversions or leads.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OnboardingTree;

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
// Make sure to import the updated CSS file
import "../Styles/OnboardingTree.css";

const OnboardingTree = () => {
  useEffect(() => {
    // Initialize AOS animation library with reduced impact for mobile
    const isMobile = window.innerWidth < 768;
    
    AOS.init({
      duration: isMobile ? 800 : 1000,
      once: true,
      mirror: false,
      offset: isMobile ? 80 : 120,
      delay: isMobile ? 50 : 100,
      disable: 'mobile' // Disable on mobile if causing problems
    });

    // Enhanced scroll-based animations for sequential appearance
    const steps = document.querySelectorAll(".onboarding-steps .step");

    const checkScrollPosition = () => {
      steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;

        if (isVisible) {
          setTimeout(() => {
            step.classList.add("animate");
            const stepNumber = step.querySelector(".step-number");
            if (stepNumber) {
              stepNumber.classList.add("pulse");
            }
          }, isMobile ? index * 100 : index * 150); // Reduced delay for mobile
        }
      });
    };

    // Check positions on load and scroll
    window.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("load", checkScrollPosition);

    // Trigger initial check after a short delay
    setTimeout(checkScrollPosition, 500);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("load", checkScrollPosition);
    };
  }, []);

  return (
    <div className="onboarding-steps">
      <div className="container">
        <div className="header">
          <h1 data-aos="fade-down" data-aos-duration="1000">
            Steps To Onboard Client's
          </h1>
          <p
            className="subtitle"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Our streamlined process ensures a smooth onboarding experience for all
            our digital marketing clients
          </p>
        </div>

        <div className="timeline">
          <div
            className="step"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
          >
            <div className="step-content">
              <div className="step-number pulse">1</div>
              <h2 className="step-title">Understanding</h2>
              <p className="step-description">
                For us it is very important to understand the requirement of your
                business and accordingly we will give you customized solutions. We
                accomplish detailed research to understand your project to provide
                you with the best solution at an affordable cost.
              </p>
            </div>
          </div>

          <div
            className="step"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
          >
            <div className="step-content">
              <div className="step-number pulse">2</div>
              <h2 className="step-title">Process & Plan Formation</h2>
              <p className="step-description">
                Develop a detailed project plan detailing the steps involved in
                website development or digital marketing campaign. Define goals,
                timelines, and responsibilities to ensure a smooth execution
                process.
              </p>
            </div>
          </div>

          <div
            className="step"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
          >
            <div className="step-content">
              <div className="step-number pulse">3</div>
              <h2 className="step-title">Selecting Best Plan</h2>
              <p className="step-description">
                Based on the gathered requirements and project scope, recommend
                the most suitable website development or digital marketing plan
                with estimated outcomes. Selecting the plan to fit within the
                client's budget, timeline, and desired outcomes.
              </p>
            </div>
          </div>

          <div
            className="step"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
          >
            <div className="step-content">
              <div className="step-number pulse">4</div>
              <h2 className="step-title">Execution and Implementation</h2>
              <p className="step-description">
                Executing the website development or digital marketing campaign
                according to the agreed-upon timeline and specifications.
                Coordination is done with the client to gather feedback and make
                necessary adjustments throughout the process.
              </p>
            </div>
          </div>

          <div
            className="step"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
          >
            <div className="step-content">
              <div className="step-number pulse">5</div>
              <h2 className="step-title">Monitoring & Optimization</h2>
              <p className="step-description">
                Monitor the performance of the website or digital marketing
                campaign using analytics and reporting tools. Analyze key metrics
                such as traffic, engagement, conversions, and ROI to track
                progress towards the defined goals.
              </p>
            </div>
          </div>

          <div
            className="step"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
          >
            <div className="step-content">
              <div className="step-number pulse">6</div>
              <h2 className="step-title">Final Outcome/Result</h2>
              <p className="step-description">
                Provide regular progress reports to the client, highlighting
                achievements, challenges, and areas for improvement. Results
                Oriented approach such as increased traffic, higher search
                rankings, improved conversions or leads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingTree;