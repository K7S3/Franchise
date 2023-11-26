import React, { useRef } from "react";
import "./Home.css";

function Home() {
  const stepRefs = useRef([]);
  stepRefs.current = new Array(6).fill().map((_, i) => stepRefs.current[i] || React.createRef());

  const scrollToStep = (index) => {
    stepRefs.current[index].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  
  return (
    <div className="homePage">
      <h1>Franchise Sponsors</h1>
      
      <div className="step" ref={stepRefs.current[0]} style={{ backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.3), rgba(0, 0, 255, 0.3)),
                  url(../../assets/welcome.jpg)` }}>

      <div className="step-content" style={{width: `40vw`}}>
      <h2>Welcome to our Franchise Sponsorship Program</h2>
      <br />
      <h5>We pay you to work at a premium rate and get the experience you need to own your own store!</h5>
      <br />
      <br />
      <p>We are a conglomerate of franchise consultants looking to empower the next generation of franchisees! College students can get sponsored by us to work at a franchise store of their choosing for a premium wage competitive for the degree they hold. After getting the necessary experience, we will help them apply and get approved for their own store(s). We can help make your dream of being a franchisee come true!</p>
      <div className="step-arrow">
          <a href="#!" onClick={() => scrollToStep(1)}>Explore</a>
      </div>
      </div>
     </div>

      {/* Step 1 */}
      <div className="step" ref={stepRefs.current[1]} style={{ backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.3), rgba(0, 0, 255, 0.3)), url(../../assets/consultation.webp)` }}>
        <div className="step-content" style={{width: `40vw`}}>
        <h2>Step 1: Sign up for a free consultation</h2>
        <br/><br/>
        <p>After reviewing the sponsorship roadmap, click on the link to sign up for a free consultation. In this consultation, we will discuss your goals, background, and potential fit within our franchise program. This step is crucial to understand the path ahead and to set up the foundation for your successful franchise journey.</p>
        {/* Navigation arrow for the next step */}
        <div className="step-arrow">
          <a href="#!" onClick={() => scrollToStep(2)}>Next Step</a>
        </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="step" ref={stepRefs.current[2]} style={{ backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.3), rgba(0, 0, 255, 0.3)), url(../../assets/welcome-to-new-job.webp)` }}>
      <div className="step-content" style={{width: `40vw`}}>
        <h2>Step 2: Start your new job!</h2>
        <br/><br/>
        <p>After you have met with our consultants and collectively chosen the right franchise for you, you will start your new job at one of our franchise stores. This hands-on experience is invaluable as it will provide you with real-world insights into how our franchises operate. You will learn about day-to-day operations, customer service, management, and more.</p>
        <div className="step-arrow">
          <a href="#!" onClick={() => scrollToStep(3)}>Next Step</a>
        </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="step" ref={stepRefs.current[3]} style={{ backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.3), rgba(0, 0, 255, 0.3)), url(../../assets/gain-experience.webp)` }}>
        <div className="step-content" style={{width: `40vw`}}>
        <h2>Step 3: Get promoted and gain experience</h2>
        <br/><br/>
        <p>Over the course of your time working at a franchise store, you can expect to rotate among various roles. This exposure is part of our comprehensive training program, designed to give you a well-rounded experience. As you demonstrate your skills and commitment, you will have opportunities for promotion, allowing you to take on more responsibilities and further develop your managerial skills.</p>
        <div className="step-arrow">
          <a href="#!" onClick={() => scrollToStep(4)}>Next Step</a>
        </div>
      </div>
      </div>

      {/* Step 4 */}
      <div className="step" ref={stepRefs.current[4]} style={{ backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.3), rgba(0, 0, 255, 0.3)), url(../../assets/first-store.png)` }}>
      <div className="step-content" style={{width: `40vw`}}>
        <h2>Step 4: Apply and get approved for your first store!</h2>
        <br/><br/>
        <p>After working for the franchise store for over a year, we will help you complete the application to become a franchisee. This process includes assessing your performance, financial planning, and finding the right location for your store. Our team will support you every step of the way to ensure you meet all the requirements and set you up for success.</p>
        <div className="step-arrow">
          <a href="#!" onClick={() => scrollToStep(5)}>Next Step</a>
        </div>
      </div>
      </div>

      {/* Step 5 */}
      <div className="step" ref={stepRefs.current[5]} style={{ backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.3), rgba(0, 0, 255, 0.3)), url(../../assets/own-store.webp)` }}>
        <div className="step-content" style={{width: `40vw`}}>
        <h2>Step 5: Own and manage your own store(s)!</h2>
        <br/><br/>
        <p>After getting approved for your first store, our team will work closely with you to make sure you have everything you need to start strong. This includes training on store management, staff recruitment, marketing strategies, and operational best practices. Owning and managing your own store is a significant achievement, and we'll be there to support you through this exciting new chapter.</p>
        <div className="step-arrow">
          <a href="#!" onClick={() => scrollToStep(6)}>Next Step</a>
        </div>
        </div>
      </div>

      {/* Step 6 */}
      <div className="step" ref={stepRefs.current[6]} style={{ backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.3), rgba(0, 0, 255, 0.3)), url(../../assets/sign-up.webp)` }}>
      <div className="step-content" style={{width: `40vw`}}>
        <h2>Step 6: Sign up for a free consultation!</h2>
        <br/><br/>
        <p>Now that you have reviewed the sponsorship roadmap, click on the link below to sign up for a free consultation. This step is your gateway to the exciting world of franchise ownership. Our team is ready to guide you through each stage of the process, ensuring that you have all the tools and support needed to thrive in our franchise program.</p>
        <button><a href="https://docs.google.com/forms/d/e/1FAIpQLSecij6_kgpIx5nCQ9C0u3VThAcV748dyYaBI8ATXD-er7k2WA/viewform?usp=sf_link"> <h3>Click Here!</h3> </a> </button>
      </div>
    </div>
    </div>
  );
}

export default Home;
