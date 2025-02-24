import { useState } from "react";

const CreditCardForm = ({ totalAmount }) => {
  const [cardDetails, setCardDetails] = useState({ cardNumber: "", expiryDate: "", cvv: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateCardDetails = () => {
    const { cardNumber, expiryDate, cvv } = cardDetails;
    if (!/^\d{16}$/.test(cardNumber)) return setError("Invalid card number.");
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) return setError("Invalid expiry date.");
    if (!/^\d{3}$/.test(cvv)) return setError("Invalid CVV.");
    setError(""); return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateCardDetails()) return;
    setIsLoading(true);
    setTimeout(() => { alert(`Payment of ₹${totalAmount} successful!`); setIsLoading(false); }, 2000);
  };

  return (
    <div>
      <h5>Credit Card Payment</h5>
      <h6>Total to Pay: ₹{totalAmount}</h6>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Card Number" maxLength="16" className="form-control mb-2"
          value={cardDetails.cardNumber} onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })} />
        <input type="text" placeholder="MM/YY" maxLength="5" className="form-control mb-2"
          value={cardDetails.expiryDate} onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })} />
        <input type="password" placeholder="CVV" maxLength="3" className="form-control mb-2"
          value={cardDetails.cvv} onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })} />

        <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
          {isLoading ? "Processing..." : `Pay ₹${totalAmount}`}
        </button>
      </form>
    </div>
  );
};

export default CreditCardForm;
