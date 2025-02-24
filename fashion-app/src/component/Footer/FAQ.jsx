import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "How can I track my order?",
    answer: "You can track your order from the 'Track Order' section in your account.",
  },
  {
    question: "What is the return policy?",
    answer: "You can return products within 30 days of delivery. Visit the 'Returns' page for more info.",
  },
  {
    question: "How do I cancel my order?",
    answer: "Go to 'My Orders' and select 'Cancel' for the order you wish to cancel.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards, UPI, Net Banking, and Cash on Delivery.",
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach us at support@fashionstore.com or call +91 0000000000.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for a question..."
        className="faq-search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="faq-list">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span>{openIndex === index ? "➖" : "➕"}</span>
              </div>
              {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))
        ) : (
          <p className="no-results">No questions found.</p>
        )}
      </div>
    </div>
  );
};

export default FAQ;
