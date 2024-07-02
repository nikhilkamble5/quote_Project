const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Load quotes data from JSON file
const quotes = JSON.parse(fs.readFileSync("quotesData.json"));

// Get a random quote
app.get("/api/quotes/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

// Search quotes by author
app.get("/api/quotes/search", (req, res) => {
  const { author } = req.query;
  const filteredQuotes = quotes.filter((quote) =>
    quote.author.toLowerCase().includes(author.toLowerCase())
  );
  res.json(filteredQuotes);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
