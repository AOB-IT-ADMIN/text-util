import React from "react";

const TextArea = ({ text, onTextChange, isDarkMode }) => {
  const handleTextChange = (e) => {
    onTextChange(e.target.value);
  };

  return (
    <div>
      <div className="form-floating">
        <textarea
          className={`form-control ${
            isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
          }`}
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: 300 }}
          value={text}
          onChange={handleTextChange}
        />
        <label htmlFor="floatingTextarea2">Enter Your Text Here...</label>
      </div>
    </div>
  );
};

export default TextArea;
