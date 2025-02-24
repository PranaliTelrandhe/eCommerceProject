import { useState } from "react";
import { useLocation } from "react-router-dom";
import CreditCardForm from "./CreditCardForm";
import DebitCardForm from "./DebitCardForm";
import NetBankingForm from "./NetBankingForm";
import UpiForm from "./UpiForm";

const PaymentModes = () => {
  const location = useLocation();
  const totalAmount = location.state?.totalAmount || "0.00";

  const [paymentMode, setPaymentMode] = useState("");

  return (
    <div className="container mt-5">
      <h3 className="text-center">Total Payable Amount: ₹{totalAmount}</h3>

      <div className="d-grid gap-3 mb-4">
        <button className="btn btn-primary" onClick={() => setPaymentMode("creditCard")}>Credit Card</button>
        <button className="btn btn-primary" onClick={() => setPaymentMode("debitCard")}>Debit Card</button>
        <button className="btn btn-primary" onClick={() => setPaymentMode("netBanking")}>Net Banking</button>
        <button className="btn btn-primary" onClick={() => setPaymentMode("upi")}>UPI</button>
      </div>

      {paymentMode === "creditCard" && <CreditCardForm totalAmount={totalAmount} />}
      {paymentMode === "debitCard" && <DebitCardForm totalAmount={totalAmount} />}
      {paymentMode === "netBanking" && <NetBankingForm totalAmount={totalAmount} />}
      {paymentMode === "upi" && <UpiForm totalAmount={totalAmount} />}
    </div>
  );
};

export default PaymentModes;
