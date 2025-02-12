import React from "react";
import { Link } from "react-router-dom";

const ReturnPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Return & Refund Policy</h1>
      <p>If you're not satisfied with a purchase, you can return the product within 7 days.</p>
      <p>Refunds will be processed within 5-7 business days.</p>
      
      <Link to="/customer-service" className="text-blue-500">Back to Customer Service</Link>
    </div>
  );
};

export default ReturnPolicy;
