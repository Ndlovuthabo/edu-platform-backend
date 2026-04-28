const Payment = require("../models/Payment");

// SUBSCRIBE USER
exports.subscribe = async (req, res) => {
  try {
    const payment = await Payment.create({
      userId: req.body.userId,
      amount: 100, // monthly fee
      status: "active",
      expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    });

    res.json(payment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CHECK STATUS
exports.checkStatus = async (req, res) => {
  const payment = await Payment.findOne({ userId: req.params.userId });

  if (!payment || payment.expiryDate < Date.now()) {
    return res.json({ active: false });
  }

  res.json({ active: true });
};