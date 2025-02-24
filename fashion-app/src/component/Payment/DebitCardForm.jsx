import { useState } from "react";

const DebitCardForm = () => {
  const [debit, setDebit] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Track API call state

  // Validate Card Details
  const validateCardDetails = () => {
    const { cardNumber, expiryDate, cvv } = debit;

    if (!/^\d{16}$/.test(cardNumber)) {
      setError("Invalid card number. Must be 16 digits.");
      return false;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      setError("Invalid expiry date. Format should be MM/YY.");
      return false;
    }
    if (!/^\d{3}$/.test(cvv)) {
      setError("Invalid CVV. Must be 3 digits.");
      return false;
    }

    setError(""); // Clear errors if all validations pass
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateCardDetails()) return;

    setIsLoading(true);

    try {
      const response = await fetch("https://your-api.com/process-debit-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cardNumber: debit.cardNumber,
          expiryDate: debit.expiryDate,
          cvv: debit.cvv,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setPaymentSuccess(true);
        setDebit({ cardNumber: "", expiryDate: "", cvv: "" }); // Clear form
      } else {
        setError(result.message || "Payment failed. Try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <div>
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

      <h5>Debit Card Payment</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Card Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="1234 5678 9012 3456"
            maxLength="16"
            value={debit.cardNumber}
            onChange={(e) => setDebit({ ...debit, cardNumber: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <label>Expiry Date</label>
          <input
            type="text"
            className="form-control"
            placeholder="MM/YY"
            maxLength="5"
            value={debit.expiryDate}
            onChange={(e) => setDebit({ ...debit, expiryDate: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <label>CVV</label>
          <input
            type="password"
            className="form-control"
            placeholder="123"
            maxLength="3"
            value={debit.cvv}
            onChange={(e) => setDebit({ ...debit, cvv: e.target.value })}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
          {isLoading ? "Processing..." : "Pay"}
        </button>
      </form>
    </div>
  );
};

export default DebitCardForm;
