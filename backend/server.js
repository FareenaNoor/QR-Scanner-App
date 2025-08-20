const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// API endpoint to receive scanned QR data
app.post("/scan", (req, res) => {
  const { result } = req.body;

  // Get IP address of client
  const ip =
    req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";

  res.json({ message: "Data received successfully", ip });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
