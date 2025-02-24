import React, { useState } from "react";
import "../Footer/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      {/* Customer Support Details */}
      <div className="contact-details">
        <h3>Customer Support</h3>
        <p>📞 Call Us: <strong>+91 0000000000</strong></p>
        <p>📧 Email: <strong>support@fashionstore.com</strong></p>
        <p>⏰ Available: 9 AM - 9 PM (Mon-Sun)</p>
      </div>

      {/* Contact Form */}
      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <p className="success-message">✅ Thank you! We will get back to you soon.</p>
      )}

      
    
    </div>
  );
};

export default ContactUs;
