import React, { createContext, useContext, useState } from "react";
import { Card, CardContent } from "../component/Card";
import { Button } from "../component/Button";
import "../component/TodaysDealsPage.css";
import { ShopContext } from "../App"; //  Fixed import path

// Create a DealsContext
const DealsContext = createContext();

// DealsProvider component to manage deals' data
const DealsProvider = ({ children }) => {
  const [deals, setDeals] = useState([
    { id: 1, title: "Wireless Earbuds", price: "1000", discount: "20%" },
    { id: 2, title: "Smartphone Stand", price: "1500", discount: "10%" },
    { id: 3, title: "Bluetooth Speaker", price: "999", discount: "25%" },
    { id: 4, title: "Gaming Mouse", price: "1999", discount: "15%" },
  ]);

  return (
    <DealsContext.Provider value={{ deals, setDeals }}>
      {children}
    </DealsContext.Provider>
  );
};

// Custom hook to use DealsContext
const useDeals = () => useContext(DealsContext);

// DealsList component
const DealsList = () => {
  const { deals } = useDeals();
  const { addToCart } = useContext(ShopContext); // Now inside a component

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {deals.map((deal) => (
        <Card key={deal.id} className="shadow-lg rounded-lg p-4">
          <CardContent>
            <h2 className="text-xl font-bold mb-2">{deal.title}</h2>
            <p className="text-gray-600">Price: &#8377;{deal.price}</p>
            <p className="text-green-500">Discount: {deal.discount}</p>
            <button
              className="btn btn-primary mt-2 w-100"
              onClick={() => {
                addToCart(deal); // Fixed usage
                alert(`${deal.title} added to cart!`);
              }}
            >
              Add to Cart
            </button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// AddDeal component
const AddDeal = () => {
  const { setDeals } = useDeals();
  const [newDeal, setNewDeal] = useState({ title: "", price: "", discount: "" });

  const handleAddDeal = () => {
    if (!newDeal.title || !newDeal.price || !newDeal.discount) {
      alert("Please fill out all fields!");
      return;
    }

    setDeals((prevDeals) => [
      ...prevDeals,
      { id: prevDeals.length + 1, ...newDeal },
    ]);
    setNewDeal({ title: "", price: "", discount: "" });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add a New Deal</h2>
      <input
        type="text"
        placeholder="Title"
        value={newDeal.title}
        onChange={(e) => setNewDeal({ ...newDeal, title: e.target.value })}
        className="border rounded p-2 w-full mb-2"
      />
      <input
        type="text"
        placeholder="Price"
        value={newDeal.price}
        onChange={(e) => setNewDeal({ ...newDeal, price: e.target.value })}
        className="border rounded p-2 w-full mb-2"
      />
      <input
        type="text"
        placeholder="Discount"
        value={newDeal.discount}
        onChange={(e) => setNewDeal({ ...newDeal, discount: e.target.value })}
        className="border rounded p-2 w-full mb-4"
      />
      <Button onClick={handleAddDeal} className="w-full">
        Add Deal
      </Button>
    </div>
  );
};

// Main component
const TodaysDealsPage = () => {
  return (
    <DealsProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Today's Deals</h1>
        <AddDeal />
        <DealsList />
      </div>
    </DealsProvider>
  );
};

export default TodaysDealsPage;
