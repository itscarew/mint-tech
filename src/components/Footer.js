import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <div> Showing 1 to 10 of 500 entries </div>
        <div className="controller">
          <span>Previous</span>
          <span className="blue">1</span>
          <span className="gray">2</span>
          <span>Next</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
