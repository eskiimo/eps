import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="img-container">
        {" "}
        <img className="footer-img" alt="footer" src="/assets/epslogo.png" />
      </div>
      <ul>
        <h4>Doormat Navigation</h4>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservation</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
      <ul>
        <h4>Contact</h4>
        <li>St 20, Mokattam, Cairo</li>
        <li>+201154773599</li>
        <li>info@eps.com.eg</li>
      </ul>{" "}
      <ul>
        <h4>Social Media</h4>
        <li>FaceBook</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>
    </footer>
  );
}
