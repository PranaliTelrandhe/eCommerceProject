import React, { useState, useEffect } from "react";
import "./Footer.css"; // Include custom CSS for styling

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState([]);

  useEffect(() => {
    // Simulate an API call to fetch footer links
    const fetchFooterLinks = () => {
      const links = [
        {
          title: "Customer Service",
          items: ["Contact Us", "FAQs", "Returns", "Track Order"],
        },
        {
          title: "About Fashion",
          items: ["Company Info", "Careers", "Press"],
        },
        {
          title: "Follow Us",
          items: ["Facebook", "Twitter", "Instagram"],
        },
      ];
      setFooterLinks(links);
    };

    fetchFooterLinks();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        {footerLinks.map((section, index) => (
          <div key={index} className="footer-section">
            <h4>{section.title}</h4>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Fashion. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
