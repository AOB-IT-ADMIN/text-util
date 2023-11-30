import React, { useState } from "react";
import TextArea from "./TextArea";
import Button from "./Button";

const Body = ({ isDarkMode }) => {
  const [text, setText] = useState("");
  const [counts, setCounts] = useState({
    wordCount: 0,
    letterCount: 0,
    specialCharCount: 0,
    numberCount: 0,
    symbolCount: 0,
  });

  // Function to handle text change in the TextArea component
  const handleTextChange = (newText) => {
    setText(newText);
    countOccurrences(); // Call the countOccurrences function to update the counts
  };

  // Function to convert text to uppercase
  const convertToUppercase = () => {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
  };

  const convertToLowercase = () => {
    let lowerCaseText = text.toLocaleLowerCase();
    setText(lowerCaseText);
  };
  // Function to remove extra white spaces
  const removeExtraSpaces = () => {
    let cleanedText = text.replace(/\s+/g, " ").trim();
    setText(cleanedText);
  };

  // Function to copy text to clipboard
  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  // Function to toggle case (uppercase to lowercase and vice versa)
  const toggleCase = () => {
    let toggledText = text
      .split("")
      .map((char) =>
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
      )
      .join("");
    setText(toggledText);
  };

  // Function to count the occurrences of various elements in the text
  let wordCount,
    letterCount,
    specialCharCount,
    numberCount,
    symbolCount = "";
  const countOccurrences = () => {
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const letterCount = text.replace(/[^a-zA-Z]/g, "").length;
    const specialCharCount = text.replace(/[a-zA-Z0-9]/g, "").length;
    const numberCount = text.replace(/[^0-9]/g, "").length;
    const symbolCount = text.replace(/[a-zA-Z0-9\s]/g, "").length;

    setCounts({
      wordCount,
      letterCount,
      specialCharCount,
      numberCount,
      symbolCount,
    });
  };
  // Function to clear the text
  const clearText = () => {
    setText("");
  };

  return (
    <div className="container">
      <TextArea
        text={text}
        onTextChange={handleTextChange}
        isDarkMode={isDarkMode}
      />
      <div className="row row-cols-auto">
        <Button
          text="Convert Text Uppercase"
          onClick={convertToUppercase}
          isDarkMode={isDarkMode}
        />
        <Button
          text="Convert Text Lowercase"
          onClick={convertToLowercase}
          isDarkMode={isDarkMode}
        />
        <Button
          text="Remove Extra Spaces"
          onClick={removeExtraSpaces}
          isDarkMode={isDarkMode}
        />
        <Button text="Copy Text" onClick={copyText} isDarkMode={isDarkMode} />
        <Button
          text="Toggle Case"
          onClick={toggleCase}
          isDarkMode={isDarkMode}
        />
        {/* <Button text="Count Elements" onClick={countOccurrences} /> */}
        <div className="dropdown m-3">
          <button
            className={`btn  dropdown-toggle ${
              isDarkMode ? "btn-light" : "btn-primary"
            }`}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={countOccurrences}
          >
            Count Elements
          </button>
          <ul
            className={`dropdown-menu ${
              isDarkMode ? "dropdown-menu-dark" : "dropdown-menu-light"
            }`}
          >
            <li>
              <a className="dropdown-item" href="#">
                Word Count : {counts.wordCount}
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Letter Count : {counts.letterCount}
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Special Character Count : {counts.specialCharCount}
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Number Count : {counts.numberCount}
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Symbal Count : {counts.symbolCount}
              </a>
            </li>
          </ul>
        </div>

        <Button text="Clear Text" onClick={clearText} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Body;
