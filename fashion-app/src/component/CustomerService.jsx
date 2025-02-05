import React from "react";
import LiveChat from "./LiveChat";

const CustomerService = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Customer Service</h1>

      {/* Section 1: Help Topics */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-3">Help Topics</h2>
        <ul className="list-disc list-inside">
          <li>How to track my order?</li>
          <li>How to return a product?</li>
          <li>What are the payment methods?</li>
          <li>How do I cancel an order?</li>
        </ul>
      </div>

      {/* Section 2: Contact Us */}
      <div className="bg-white shadow-lg p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
        <p>Email: <a href="mailto:support@myntra.com" className="text-blue-500">Fashion@support.com</a></p>
        <p>Phone: <span className="font-bold">1800-000-0000</span></p>
        <p>Live Chat: 
          <button 
            className="bg-blue-500 text-white px-3 py-1 rounded ml-2" 
            onClick={() => window.Tawk_API?.toggle()}
          >
           <LiveChat/>
          </button>
        </p>
      </div>

      {/* Section 3: Return & Refund Policy */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Return & Refund Policy</h2>
        <p>You can return a product within 7 days of delivery. Refunds will be processed within 5-7 business days.</p>
        <a href="/" className="text-blue-500">Read More</a>
      </div>

      {/* LiveChat Component (Loads the Tawk.to Script) */}
    {/*  <LiveChat /> */}
    </div>
  );
};

export default CustomerService;
