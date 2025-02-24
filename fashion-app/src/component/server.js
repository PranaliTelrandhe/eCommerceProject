require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// Transaction Schema
const TransactionSchema = new mongoose.Schema({
  nameOnCard: String,
  cardLast4: String, // Store only the last 4 digits of the card
  amount: Number,
  currency: String,
  status: String,
  stripePaymentIntentId: String, // Store Stripe Payment Intent ID for reference
  createdAt: { type: Date, default: Date.now },
});

const Transaction = mongoose.model("Transaction", TransactionSchema);

// Payment Route (Process Payment & Save to DB)
app.post("/process-payment", async (req, res) => {
  const { nameOnCard, cardNumber, expiryDate, cvv, amount, currency } = req.body;

  // Input Validation
  if (!nameOnCard || !cardNumber || !expiryDate || !cvv || !amount || !currency) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    // Create a Payment Method
    const paymentMethod = await stripe.paymentMethods.create({
      type: "card",
      card: {
        number: cardNumber,
        exp_month: expiryDate.split("/")[0],
        exp_year: expiryDate.split("/")[1],
        cvc: cvv,
      },
      billing_details: {
        name: nameOnCard,
      },
    });

    // Create a Payment Intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe uses cents
      currency: currency || "usd",
      payment_method: paymentMethod.id,
      confirm: true, // Confirm the payment immediately
      description: `Payment for ${nameOnCard}`,
    });

    // Save transaction in MongoDB
    const newTransaction = new Transaction({
      nameOnCard,
      cardLast4: cardNumber.slice(-4), // Store only the last 4 digits
      amount,
      currency,
      status: paymentIntent.status,
      stripePaymentIntentId: paymentIntent.id,
    });

    await newTransaction.save();

    res.status(200).json({ success: true, message: "Payment successful!", paymentIntent });
  } catch (error) {
    console.error("❌ Payment Error:", error);
    res.status(500).json({ success: false, message: "Payment failed", error: error.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));