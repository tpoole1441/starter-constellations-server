const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/constellations", (req, res) => {
  // Your endpoint logic here
  res.json({ message: "Hello from the server!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
