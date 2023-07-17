import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
  <>  <div class="footer">
  <div class="footer-container">
    <div class="footer-section">
      <h3>About Us</h3>
      <p>
        Just worship is an annual worship and praise outreach, organized by
        a team of worship leaders in and outside Nigeria with the sole
        intent of inspiring intimacy with God through worship and praise.
      </p>
    </div>
    <div class="footer-section">
      <h3>Contact Us</h3>
      <ul>
        <li>
          <a
            href="https://maps.google.com/maps?q=51 Unity St, Abakpa 400103, Enugu"
            target="_blank"
          >
            <MdOutlineLocationOn className="icon" /> No 38 Edinburgh
          </a>
        </li>
        <li>
          <a href="mailto:justwmusicoutreach@gmail.com " target="_blank">
            <MdOutlineMail className="icon" />
            justwmusicoutreach@gmail.com
          </a>
        </li>
        <li>
          <a href="tel:+32 467 81 42 71">
            <MdOutlineLocalPhone className="icon" />
            +1 123 456 7890
          </a>
        </li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Follow Us</h3>
      <div class="social-media">
        <a href="#">
          {" "}
          <FaTelegramPlane className="icon" />
        </a>
        <a href="#">
          {" "}
          <FaFacebookF className="icon" />
        </a>
        <a href="#">
          {" "}
          <AiFillInstagram className="icon" />
        </a>
      </div>

    </div>
  </div>
</div>

 <div class="copyright-section">
 <p>&copy; 2023 Just Worship Intenational Music Outreach. All rights reserved.</p>
 <p class="privacy-policy">
   <Link to="/privacy-policy">Privacy Policy</Link>
 </p>
</div>
</>
  );
};

export default Footer;
