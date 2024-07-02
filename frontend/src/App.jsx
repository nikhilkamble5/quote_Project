import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
};

export default App;
