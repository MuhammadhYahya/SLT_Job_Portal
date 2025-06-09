const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://yahya555ays:JzUpk5R4KwOYkyhP@cluster0.nlr1onu.mongodb.net/slt_job_portal?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// User Schema & Model
const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true }, // Hashed
});

const User = mongoose.model("User", userSchema);

// Register Route
app.post("/api/register", async (req, res) => {
  const { userId, name, password } = req.body;

  try {
    const existingUser = await User.findOne({ userId });
    if (existingUser) {
      return res.status(400).json({ message: "User ID already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      userId,
      name,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(200).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Registration failed:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
});

// Login Route
app.post("/api/login", async (req, res) => {
  const { userId, password } = req.body;

  try {
    const user = await User.findOne({ userId });
    if (!user) {
      return res.status(400).json({ message: "Invalid user ID or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid user ID or password" });
    }

    // You can generate a token here if needed
    res.status(200).json({
      message: "Login successful",
      user: {
        userId: user.userId,
        name: user.name
      }
    });
  } catch (error) {
    console.error("Login failed:", error);
    res.status(500).json({ message: "Server error during login" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
