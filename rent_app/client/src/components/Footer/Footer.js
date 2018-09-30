import React from "react";

import "./Footer.css";

const Footer = props => (
  <footer className="pagebottom">
    <div className="bottom-center">
      <div className="bottom-nav">
        <a href="">
          <i id="social-git" className="fab fa-github-square fa-3x social" />
        </a>
        <a href="">
          <i id="social-linked" className="fab fa-twitter fa-3x social" />
        </a>
        <a href="">
          <i id="social-linked" className="fas fa-envelope-square fa-3x social" />
        </a>

      </div>
    </div>
  </footer>
);
export default Footer;
