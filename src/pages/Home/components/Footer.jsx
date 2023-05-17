import React from "react";
import "../Home.css";
const Footer = () => {
  return (
    <div>
      <div>
        <h3>Let's Connect</h3>
        <a className="footer-link" href="https://twitter.com/BhumikaSingh27">
          Twitter
        </a>
        <a className="footer-link" href="https://github.com/BhumikaSingh-27">
          Github
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/bhumika-singh-594004184/"
        >
          LinkedIn
        </a>
      </div>
      <div className="footer-text"> @developed by bhumika</div>
    </div>
  );
};

export default Footer;
