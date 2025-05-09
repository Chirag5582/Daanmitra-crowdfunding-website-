const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.send("Auth route is working");
});

// Register
router.post("/register", async (req, res) => {
  const { firstname, lastname, email, password, repassword } = req.body;

  if (!firstname || !lastname || !email || !password || !repassword) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (password !== repassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      repassword: hashedPassword,
    });
    await newUser.save();

    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message || "Server error" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "Invalid password" });

    res.status(200).json({
      message: "Login successful",
      user: { id: user._id },
    });
  } catch (err) {
    return res.status(500).json({ error: err.message || "Server error" });
  }
});

module.exports = router;
