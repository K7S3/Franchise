import React from "react";

function Home() {
  return (
    <div className="homePage">
      <h1>Welcome to Our Franchise Program</h1>

      <div className="step">
        <h2>Step 1: Sign up for a free consultation</h2>
        <p>After reviewing the sponsorship roadmap, click on the link to sign up for a free consultation with one of our experienced franchise consultants. We will reach out via email to set up your appointment...</p>
      </div>

      <div className="step">
        <h2>Step 2: Start your new job!</h2>
        <p>After you have met with our consultants and collectively chosen the right franchise for you, you will get started at your new job! Your wage will be determined by the average salary for a college entry level job in your area...</p>
      </div>

      {/* Repeat for Steps 3 to 5 */}

      <div className="step">
        <h2>Step 6: Sign up for a free consultation!</h2>
        <p>Now that you have reviewed the sponsorship roadmap, click on the link below to sign up for a free consultation with one of our experienced franchise consultants...</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSecij6_kgpIx5nCQ9C0u3VThAcV748dyYaBI8ATXD-er7k2WA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Sign Up Here</a>
      </div>
    </div>
  );
}

export default Home;
