import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [quote, setQuote] = useState(null);

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/quotes/random"
      );
      setQuote(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Quote of the Day</h1>
      {quote && (
        <div className="card">
          <div className="card-body">
            <p className="card-text">{quote.quote}</p>
            <footer className="blockquote-footer">
              <cite title="Source Title">{quote.author}</cite>
            </footer>
            <span className="badge bg-primary">{quote.category}</span>
          </div>
        </div>
      )}
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={fetchRandomQuote}>
          Get New Quote
        </button>
      </div>
    </div>
  );
};

export default HomePage;
