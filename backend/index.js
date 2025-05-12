const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Razorpay = require("razorpay");
const bodyParser = require("body-parser");
const fs = require("fs");

const authRoutes = require("./routes/auth");

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(5000, () => console.log("🚀 Server running"));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
const readData = () => {
  if (fs.existsSync("orders.json")) {
  const data = fs.readFileSync("data.json");
  return JSON.parse(data);
  }
  return [];
};
const writeData = (data) => {
  fs.writeFileSync("orders.json", JSON.stringify(data, null, 2));
};

if (!fs.existsSync("orders.json")) {
  writeData([]);
}
app.post("/api/razorpay-order", async (req, res) => {
  const { amount, currency } = req.body;
  try {
    const options = {
      amount: amount * 100,
      currency: currency,
      receipt: "receipt#1",
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
});
app.get("/payment-success.html", (req, res) => {
  res.sendFile(path.join(__dirname, "payment-success.html"));
});

  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  })