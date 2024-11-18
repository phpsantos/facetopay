import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

// Use a variável de ambiente REACT_APP_API_URL
const API_URL = process.env.REACT_APP_API_URL;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home apiUrl={API_URL} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
