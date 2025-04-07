import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>🐞 Ladybug Store</h2>
        </div>
        <nav className="footer-nav">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="social-icons">
         <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Ladybug Store. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
