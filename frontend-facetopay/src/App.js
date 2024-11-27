import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ServerError from "./pages/ServerError";
import posthog from 'posthog-js'



// Use a variável de ambiente REACT_APP_API_URL
const API_URL = process.env.REACT_APP_API_URL;

function App() {

  // Usando o AOS para efeitos na tela
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  posthog.init('phc_svtTJYiuvw61GTtAQMAmOFZKNjhb0D1jV4XqvlzI2zV',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home apiUrl={API_URL} />} />
        <Route path="/500" element={<ServerError />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
