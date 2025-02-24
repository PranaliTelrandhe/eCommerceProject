import React, { useState } from "react";
import "./TrackOrder.css";

const dummyOrders = [
  {
    orderId: "123456",
    status: "Shipped",
    estimatedDelivery: "Feb 20, 2025",
    trackingSteps: [
      { step: "Order Placed", date: "Feb 12, 2025" },
      { step: "Processing", date: "Feb 13, 2025" },
      { step: "Shipped", date: "Feb 14, 2025" },
    ],
  },
  {
    orderId: "654321",
    status: "Out for Delivery",
    estimatedDelivery: "Feb 15, 2025",
    trackingSteps: [
      { step: "Order Placed", date: "Feb 10, 2025" },
      { step: "Processing", date: "Feb 11, 2025" },
      { step: "Shipped", date: "Feb 12, 2025" },
      { step: "Out for Delivery", date: "Feb 15, 2025" },
    ],
  },
];

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState("");

  const trackOrder = () => {
    const foundOrder = dummyOrders.find((order) => order.orderId === orderId);
    if (foundOrder) {
      setOrderDetails(foundOrder);
      setError("");
    } else {
      setOrderDetails(null);
      setError("Order not found. Please check your Order ID.");
    }
  };

  return (
    <div className="track-order-container">
      <h1>Track Your Order</h1>
      <div className="track-input">
        <input
          type="text"
          placeholder="Enter Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <button onClick={trackOrder}>Track</button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {orderDetails && (
        <div className="order-details">
          <h2>Order ID: {orderDetails.orderId}</h2>
          <p>Status: <strong>{orderDetails.status}</strong></p>
          <p>Estimated Delivery: <strong>{orderDetails.estimatedDelivery}</strong></p>

          <div className="tracking-steps">
            {orderDetails.trackingSteps.map((step, index) => (
              <div key={index} className="step">
                <span className="step-date">{step.date}</span>
                <span className="step-text">{step.step}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
