import React from "react";

import "./Footer.css";

const Footer = props => (
  <footer className="pagebottom">
    <div className="bottom-center">
      <div className="bottom-nav">
        {/* //TODO: Create Facebook, Twitter, and Email Accounts for RentKeeper. */}
        <a href="www.facebook.com">
          <i id="social-git" className="fab fa-facebook-square fa-3x social" />
        </a>
        <a href="twitter.com">
          <i id="social-linked" className="fab fa-twitter fa-3x social" />
        </a>
        <a href="google.com">
          <i id="social-linked" className="fas fa-envelope-square fa-3x social" />
        </a>

      </div>
    </div>
  </footer>
);
export default Footer;
