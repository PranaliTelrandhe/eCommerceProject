import React, { useState } from "react";
import { useGiftCard } from "../component/GiftCardContext";
import "../component/GiftCardPage.css"; 

const GiftCardPage = () => {
  const { giftCards, addGiftCard } = useGiftCard();
  const [newCard, setNewCard] = useState({ recipient: "", amount: "" });

  // Handle Gift Card Purchase
  const handlePurchase = () => {
    if (!newCard.recipient || !newCard.amount) {
      alert("Please enter valid details!");
      return;
    }

    addGiftCard({
      id: Date.now(),
      recipient: newCard.recipient,
      amount: parseFloat(newCard.amount).toFixed(2),
      date: new Date().toLocaleDateString(),
    });

    setNewCard({ recipient: "", amount: "" });
    alert("Gift Card Purchased Successfully!");
  };

  return (
    <div className="gift-card-container">
      <h1 className="title">Fashion Gift Cards</h1>

      {/* Purchase Section */}
      <div className="purchase-section">
        <h2>Buy a Gift Card</h2>
        <input
          type="text"
          placeholder="Recipient's Name"
          value={newCard.recipient}
          onChange={(e) => setNewCard({ ...newCard, recipient: e.target.value })}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Amount (INR)"
          value={newCard.amount}
          onChange={(e) => setNewCard({ ...newCard, amount: e.target.value })}
          className="input-field"
        /><br></br>
        <button onClick={handlePurchase} className="purchase-btn">Buy Now</button>
      </div>

      {/* Gift Card List */}
      <div className="gift-card-list">
        <h2>Your Gift Cards</h2>
        {giftCards.length === 0 ? (
          <p>No gift cards available.</p>
        ) : (
          <ul>
            {giftCards.map((card) => (
              <li key={card.id} className="gift-card-item">
                <strong>To:</strong> {card.recipient} | <strong>Amount:</strong> ${card.amount} | <strong>Date:</strong> {card.date}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GiftCardPage;
