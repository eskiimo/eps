import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/homepage";
import Footer from "./components/footer";
import AboutPage from "./pages/aboutPage";
import SDetails from "./pages/serviceDetail";

const App = () => {
  return (
    <div className="app ">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service/:id" element={<SDetails />} />
        </Routes>
        <Footer />

        <p className="copyright">
          &#169; 2023<span className=""> EPS. </span> All rightes reserved.
        </p>
      </Router>
    </div>
  );
};

export default App;
