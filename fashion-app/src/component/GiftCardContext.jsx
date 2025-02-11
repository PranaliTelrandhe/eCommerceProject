import React, { createContext, useContext, useState } from "react";

// Create Context
const GiftCardContext = createContext();

// Custom hook for Gift Card Context
export const useGiftCard = () => useContext(GiftCardContext);

// Provider Component
export const GiftCardProvider = ({ children }) => {
  const [giftCards, setGiftCards] = useState([]);

  // Function to add a new gift card
  const addGiftCard = (card) => {
    setGiftCards((prevCards) => [...prevCards, card]);
  };

  return (
    <GiftCardContext.Provider value={{ giftCards, addGiftCard }}>
      {children}
    </GiftCardContext.Provider>
  );
};
