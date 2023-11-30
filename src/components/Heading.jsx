import React from "react";

const Heading = ({ text, isDarkMode }) => {
  return (
    <div className={`heading-container ${isDarkMode ? "dark-mode" : ""}`}>
      <h1 className="container text-center display-4">{text}</h1>
    </div>
  );
};

export default Heading;
