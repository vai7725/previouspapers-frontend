import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; All rights reserved for {new Date().getFullYear()} </p>
      <p>
        Currently we're only providing papers for selected universities. And
        constantly uploading papers.
      </p>
      <p>
        This is the beta version of the website.{" "}
        <Link to="/contact" className="footer-contact-link">
          Contact
        </Link>{" "}
        us if you find any problem
      </p>
    </footer>
  );
};

export default Footer;
