const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  userId: String,
  amount: Number,
  status: {
    type: String,
    default: "pending"
  },
  expiryDate: Date
});

module.exports = mongoose.model("Payment", paymentSchema);