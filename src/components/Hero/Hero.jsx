import React from "react";
import "./Hero.css"; // Import your custom CSS for the Hero section
import Typed from "typed.js"; // Import the typed.js library
import myImage from "../../images/BG8.jpg"; // Adjust the path based on your folder structure

function Hero() {
  // Initialize the Typed.js animation when the component mounts
  React.useEffect(() => {
    var options = {
      strings: [
        "Web Developer with AI Integration",
        "Python Web Developer",
        "Odoo Developer",
        "Full Stack AI Developer",
        "Backend Developer with AI Integration",
        "Web Developer specializing in Python and AI",
        "Deep Learning Web Developer",
        "Natural Language Processing Web Developer",
        "AI Chatbot Developer for Websites",
        "Machine Learning Engineer for Web Applications",
      ],
      typeSpeed: 60,
      backSpeed: 25,
      loop: true,
    };
    var typed = new Typed(".typing", options);

    // Clean up the Typed.js instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${myImage})`,
      }}
    >
      <div className="max-width">
        <div className="hero-content">
          <div className="text-1">Welcome, I'm</div>
          <div className="text-2">Ahmed Reda</div>
          <div className="text-3">
            And I'm a <span className="typing"></span>
          </div>
          <a href="https://www.linkedin.com/in/ahmed-reda-674a56273">Hire me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
