import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
      © {new Date().getFullYear()} MovieHub. All Rights Reserved.
    </footer>
  );
};

export default Footer;
