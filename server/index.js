const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // allow frontend http://localhost:3000
app.use(express.json()); // parse JSON body

// Fake login API
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "test@gmail.com" && password === "1234") {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
