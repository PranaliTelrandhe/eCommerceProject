import React from "react";
import { Link } from "react-router-dom";
import "./Career.css";

const jobs = [
  { id: 1, title: "Software Engineer", location: "Bangalore, India", type: "Full-time" },
  { id: 2, title: "UI/UX Designer", location: "Mumbai, India", type: "Full-time" },
  { id: 3, title: "Digital Marketing Specialist", location: "Remote", type: "Contract" },
  { id: 4, title: "Product Manager", location: "Delhi, India", type: "Full-time" },
];

const Career = () => {
  return (
    <div className="career-container">
      <h1>Join Our Team</h1>
      <p>Explore career opportunities at Fashion and grow with us!</p>

      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <Link to={`/apply/${encodeURIComponent(job.title)}`}>
              <button className="apply-btn">Apply Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
