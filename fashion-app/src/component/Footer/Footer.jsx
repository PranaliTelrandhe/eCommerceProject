import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Footer.css";

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState([]);

  useEffect(() => {
    const links = [
      {
        title: "Customer Service",
        items: [
          { name: "Contact Us", path: "/contact" },
          { name: "FAQs", path: "/faqs" },
          { name: "Returns", path: "/returns" },
          { name: "Track Order", path: "/track-order" },
        ],
      },
      {
        title: "About Fashion",
        items: [
          { name: "Company Info", path: "/about" },
          { name: "Careers", path: "/careers" },
          
        ],
      },
      {
        title: "Follow Us",
        items: [
          { name: "Facebook", url: "https://facebook.com" },
          { name: "Twitter", url: "https://twitter.com" },
          { name: "Instagram", url: "https://instagram.com" },
        ],
      },
    ];
    setFooterLinks(links);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        {footerLinks.map((section, index) => (
          <div key={index} className="footer-section">
            <h4>{section.title}</h4>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>
                  {item.path ? (
                    <Link to={item.path} className="footer-link">
                      {item.name}
                    </Link>
                  ) : (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="footer-link">
                      {item.name}
                    </a>
                  )}
                </li>
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
