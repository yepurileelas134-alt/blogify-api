require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

// Route
const uploadRoute = require("./routes/upload");
app.use("/api/upload", uploadRoute);

// Test route
app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});