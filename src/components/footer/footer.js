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
        <h4>Navigation</h4>
        <li>Home</li>
        <li>About</li>
        <li>Careers</li>
        <li>Services</li>
      </ul>
      <ul>
        <h4>ADDRESS</h4>
        <li>
          <a href="https://maps.app.goo.gl/9EuVsxaKPxDFU6kh8" target="_blank">
            Find Us On Map <i className="fa-solid fa-map-location"></i>
          </a>
        </li>
        <li>St. 20, Mokattam, Cairo</li>
      </ul>{" "}
      <ul>
        <h4> CONTACT</h4>
        <li>
          <a href="https://www.facebook.com/EPSHOSARY" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mohamed-el-hosary-19180a66/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="mailto:info@eps.com.eg" target="_blank">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
