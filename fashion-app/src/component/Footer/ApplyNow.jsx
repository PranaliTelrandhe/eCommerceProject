import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ApplyNow.css";

const ApplyNow = () => {
  const { jobTitle } = useParams();
  const [formData, setFormData] = useState({ name: "", email: "", resume: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000); // Hide message after 3 seconds
  };

  return (
    <div className="apply-container">
      <h2>Apply for {decodeURIComponent(jobTitle)}</h2>

      {submitted ? (
        <p className="success-message">✅ Application sent successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Upload Resume:</label>
          <input type="file" name="resume" onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })} required />

          <button type="submit">Submit Application</button>
        </form>
      )}
    </div>
  );
};

export default ApplyNow;
