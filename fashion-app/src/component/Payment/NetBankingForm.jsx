import React, { useState } from "react";
import axios from "axios";

const NetBankingForm = () => {
  // Save selected bank and account number
  const [selectedBank, setSelectedBank] = useState("");
  const [accNumber, setAccNumber] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // List of banks
  const banksInIndia = [
    "State Bank of India (SBI)",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Kotak Mahindra Bank",
    "Punjab National Bank (PNB)",
    "Bank of Baroda",
    "Canara Bank",
    "Union Bank of India",
    "IDFC First Bank",
  ];

  // API Call function
  const processPayment = async () => {
    try {
      const response = await axios.post("https://your-api-endpoint.com/pay", {
        bank: selectedBank,
        accountNumber: accNumber,
        amount: 500, // Example fixed amount, you can modify it
      });

      if (response.data.success) {
        setPaymentSuccess(true);
        setErrorMessage("");
        alert(`Payment processed successfully with ${selectedBank}`);
      } else {
        throw new Error(response.data.message || "Payment failed.");
      }
    } catch (error) {
      setPaymentSuccess(false);
      setErrorMessage(error.response?.data?.message || "Error processing payment.");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedBank) {
      alert("Please select a bank.");
      return;
    }
    if (!accNumber) {
      alert("Please enter your account number.");
      return;
    }

    // Call API
    processPayment();
  };

  return (
    <div className="container mt-5">
      {/* Display success or error messages */}
      {paymentSuccess && (
        <div className="alert alert-success" role="alert">
          Payment processed successfully with {selectedBank}!
        </div>
      )}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}

      <h5>Net Banking Payment</h5>
      <form onSubmit={handleSubmit}>
        {/* Select Bank */}
        <div className="form-group">
          <label htmlFor="bankSelection">Select Bank</label>
          <select
            id="bankSelection"
            className="form-control"
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
            required
          >
            <option value="">Select Your Bank</option>
            {banksInIndia.map((bank, index) => (
              <option key={index} value={bank}>
                {bank}
              </option>
            ))}
          </select>
        </div>

        {/* Account Number */}
        <div className="form-group">
          <label htmlFor="accountNumber">Account Number</label>
          <input
            type="text"
            id="accountNumber"
            className="form-control"
            value={accNumber}
            onChange={(e) => setAccNumber(e.target.value)}
            required
            placeholder="Enter your account number"
            maxLength="18"
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Pay
        </button>
      </form>
    </div>
  );
};

export default NetBankingForm;
