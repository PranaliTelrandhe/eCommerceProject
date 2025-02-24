// Import statements should be at the top
import React, { useReducer, createContext } from 'react'; // React and hooks
import ShopRouter from './Router/ShopRouter'; // Local file imports
import logo from './logo.svg'; // Asset imports
import './App.css'; // CSS file




// Create global Context Object and export
export const ShopContext = createContext();

// Reducer function for managing the shopping cart
const cartReducer = (cart, action) => {
  switch (action.type) {
    case 'ADD TO CART': 
      return [...cart, action.item];
    case 'REMOVE': 
      return cart.filter(cartItem => cartItem !== action.item);
    default: 
      return cart;
  }
};

function App() {
  const [cart, setCart] = useReducer(cartReducer, []);

  // Handlers for shopping cart
  const addToCart = product => {
    setCart({ type: 'ADD TO CART', item: product });
  };

  const removeFromCart = cartItem => {
    setCart({ type: 'REMOVE', item: cartItem });
  };

  return (
    <>
    <div>
      <ShopContext.Provider value={{ cart, addToCart, removeFromCart }}>
        <ShopRouter />
      </ShopContext.Provider>
      
    </div>
   
    

    </>
  );
}

export default App;
