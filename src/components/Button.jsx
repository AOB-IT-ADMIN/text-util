import React from "react";

const PrimaryButton = ({ text = "Button", onClick, isDarkMode }) => {
  // Render a primary button with the provided text and onClick function
  return (
    <button
      type="button"
      className={`btn ${isDarkMode ? "btn-light" : "btn-primary"} m-3`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;

