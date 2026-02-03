const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.get("/posts", (req, res) => {
  res.json([{ id: 1, title: "Hello DevOps" }]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
