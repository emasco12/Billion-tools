const express = require("express");
const router = express.Router();

const { users } = require("../models/User");

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const exists = users.find(u => u.email === email);

  if (exists) {
    return res.json({
      success: false,
      message: "Email already exists"
    });
  }

  users.push({
    id: Date.now(),
    name,
    email,
    password
  });

  res.json({
    success: true,
    message: "Registration successful"
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.json({
      success: false,
      message: "Invalid email or password"
    });
  }

  res.json({
    success: true,
    message: "Login successful",
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  });
});

module.exports = router;
