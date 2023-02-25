import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; All rights reserved for {new Date().getFullYear()} </p>
      <p>Currently we're only providing papers for selected universities.</p>
    </footer>
  );
};

export default Footer;
