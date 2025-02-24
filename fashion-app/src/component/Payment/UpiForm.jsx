import React, { useState } from "react";

const UpiForm = () => {
  const [upiId, setUpiId] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Track API call state

  // UPI validation
  const validateUpiId = (upi) => {
    const upiPattern = /^[\w.-]+@[\w.-]+$/; // Basic pattern for UPI ID
    return upiPattern.test(upi);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (!validateUpiId(upiId)) {
      setError("Invalid... Please enter a valid UPI ID.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://your-api.com/process-upi-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ upiId }),
      });

      const result = await response.json();

      if (response.ok) {
        setPaymentSuccess(true);
        setUpiId(""); // Clear the input after success
      } else {
        setError(result.message || "Payment failed. Try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <div className="container mt-5">
      {/* Success Message */}
      {paymentSuccess && (
        <div className="alert alert-success" role="alert">
          Payment processed successfully!
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <h5>UPI Payment</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="upiId">UPI ID</label>
          <input
            type="text"
            id="upiId"
            className="form-control"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            placeholder="Enter your UPI ID (e.g., name@bank)"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
          {isLoading ? "Processing..." : "Pay"}
        </button>
      </form>
    </div>
  );
};

export default UpiForm;
