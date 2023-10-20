import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import HomePage from "./pages/homepage";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div className="app ">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />

        <p className="copyright">
          &#169; 2022<span className=""> EPS. </span> All rightes reserved.
        </p>
      </Router>
    </div>
  );
};

export default App;
