import React from "react";
import "./CompanyInfo.css";

const CompanyInfo = () => {
  return (
    <div className="company-info-container">
      <h1>About Our Company</h1>
      <p className="company-description">
        Welcome to Fashion Hub, your one-stop destination for the latest fashion trends.  
        Founded in 2022, we are committed to providing high-quality, stylish, and affordable clothing  
        and accessories for men, women, and kids.
      </p>

      <div className="company-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make fashion accessible to everyone while ensuring quality and sustainability.  
          We aim to empower individuals by offering stylish and affordable choices.
        </p>
      </div>

      <div className="company-section">
        <h2>Our Vision</h2>
        <p>
          We envision a world where fashion is inclusive, sustainable, and inspiring.  
          Our goal is to become a global leader in the fashion industry by embracing innovation and sustainability.
        </p>
      </div>

      <div className="company-section">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Customer First:</strong> We prioritize our customers’ needs and satisfaction.</li>
          <li><strong>Innovation:</strong> We embrace new trends and technology to stay ahead.</li>
          <li><strong>Sustainability:</strong> We are committed to ethical sourcing and eco-friendly practices.</li>
          <li><strong>Quality:</strong> We ensure top-notch materials and craftsmanship.</li>
        </ul>
      </div>

      <div className="company-section">
        <h2>Contact Us</h2>
        <p>📍 Address: Fashion xyz,xyz, India</p>
        <p>📞 Phone: +91 00000000000</p>
        <p>📧 Email: support@fashion.com</p>
      </div>
    </div>
  );
};

export default CompanyInfo;
