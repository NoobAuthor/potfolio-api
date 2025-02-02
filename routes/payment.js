const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const authMiddleware = require("../middlewares/auth");

router.post("/create-payment-intent", authMiddleware, async (req, res) => {
  const { amount } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100, // Convert to cents
    currency: "usd",
  });
  res.json({ clientSecret: paymentIntent.client_secret });
});

module.exports = router;
