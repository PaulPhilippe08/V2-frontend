import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSnapchatGhost,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-contents">
        <div className="footer-content-left">
          {/* Remplace cette ligne si ton logo vient d'un import */}
          <img src="/logo.jpg" alt="Logo" />
          <p className="custom-text">
            Baron Life - More than a restaurant, a culinary experience. Immerse
            yourself in a world where the art of gastronomy meets modern
            elegance. Baron Life embodies excellence, offering refined cuisine
            that celebrates authentic flavors and innovative creations. Each
            dish is a work of art, crafted with passion and dedication to awaken
            your taste buds and nourish your soul. Whether you're a fan of
            revisited classics or in search of daring discoveries, our menu will
            surprise and delight you. Carefully selected fresh produce is
            transformed into symphonies of taste, all served in an atmosphere
            that combines sophistication and conviviality. Order online and let
            Baron Life take you on an unforgettable culinary journey. Whether
            it's a romantic dinner, lunch with friends or a special occasion,
            we're here to make every moment special. Welcome to Baron Life -
            where every bite tells a story, and every meal becomes a memory.
          </p>
          <div className="footer-social-icons">
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaYoutube className="social-icon" />
            <FaSnapchatGhost className="social-icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+221 78-343-64-28</li>
            <li>contact@BaronLife.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 @ BaronLife.com . All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
