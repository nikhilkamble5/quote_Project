import React, { useState } from "react";
import axios from "axios";

const SearchPage = () => {
  const [author, setAuthor] = useState("");
  const [quotes, setQuotes] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/quotes/search?author=${author}`
      );
      setQuotes(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Search Quotes by Author</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author name"
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div>
        {quotes.map((quote) => (
          <div className="card mb-3" key={quote._id}>
            <div className="card-body">
              <p className="card-text">{quote.quote}</p>
              <footer className="blockquote-footer">
                <cite title="Source Title">{quote.author}</cite>
              </footer>
              <span className="badge bg-primary">{quote.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
