import React, { useState } from "react";
import "./ReturnPolicy.css";

const returnFAQs = [
  {
    question: "What is the return policy?",
    answer:
      "You can return your product within 30 days of delivery. The item should be unused, with original tags and packaging.",
  },
  {
    question: "How do I initiate a return?",
    answer:
      "Go to 'My Orders', select the item you want to return, and follow the steps for a hassle-free return.",
  },
  {
    question: "Is there a return fee?",
    answer: "No, returns are free of charge.",
  },
  {
    question: "How long will it take to process my refund?",
    answer:
      "Refunds are processed within 7-10 business days after the returned item is received and inspected.",
  },
  {
    question: "Can I exchange an item?",
    answer:
      "Yes, exchanges are allowed for the same product in a different size or color, subject to availability.",
  },
];

const ReturnPolicy = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="return-container">
      <h1>Return & Exchange Policy</h1>
      <p>Enjoy a hassle-free return experience with our easy process.</p>

      <div className="faq-list">
        {returnFAQs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span>{openIndex === index ? "➖" : "➕"}</span>
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReturnPolicy;
