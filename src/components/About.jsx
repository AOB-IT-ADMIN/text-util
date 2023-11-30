import React from "react";

const About = ({ isDarkMode }) => {
  return (
    <div>
      <div className="accordion" id="accordionExample">
        {/* About TextUtil Web App */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                isDarkMode ? "text-light bg-dark" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAbout"
              aria-expanded="false"
              aria-controls="collapseAbout"
            >
              About TextUtil Web App
            </button>
          </h2>
          <div
            id="collapseAbout"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className={`accordion-body ${
                isDarkMode ? "bg-dark text-light" : ""
              }`}
            >
              <strong>Welcome to TextUtil, </strong>your go-to web application
              for text manipulation and analysis! Whether you're a writer,
              coder, or just someone looking to transform and analyze text,
              TextUtil has you covered.
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                isDarkMode ? "text-light bg-dark" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseMission"
              aria-expanded="false"
              aria-controls="collapseMission"
            >
              Our Mission
            </button>
          </h2>
          <div
            id="collapseMission"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className={`accordion-body ${
                isDarkMode ? "bg-dark text-light" : ""
              }`}
            >
              <strong>At TextUtil, </strong>our mission is to provide a
              user-friendly and versatile platform for working with text. We
              understand the importance of text processing in various fields,
              and our goal is to make these tasks easier and more efficient for
              everyone.
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                isDarkMode ? "text-light bg-dark" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFeatures"
              aria-expanded="false"
              aria-controls="collapseFeatures"
            >
              Key Features
            </button>
          </h2>
          <div
            id="collapseFeatures"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {/* Nested accordion for Key Features */}
              <div className="accordion" id="nestedAccordion">
                {/* Text Transformation */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        isDarkMode ? "text-light bg-dark" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTransformation"
                      aria-expanded="false"
                      aria-controls="collapseTransformation"
                    >
                      Text Transformation
                    </button>
                  </h2>
                  <div
                    id="collapseTransformation"
                    className="accordion-collapse collapse"
                    data-bs-parent="#nestedAccordion"
                  >
                    <div
                      className={`accordion-body ${
                        isDarkMode ? "bg-dark text-light" : ""
                      }`}
                    >
                      Easily convert text between uppercase and lowercase,
                      toggle case, and remove extra spaces. TextUtil gives you
                      the tools to format your text exactly the way you want.
                    </div>
                  </div>
                </div>

                {/* Text Analysis */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        isDarkMode ? "text-light bg-dark" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseAnalysis"
                      aria-expanded="false"
                      aria-controls="collapseAnalysis"
                    >
                      Text Analysis
                    </button>
                  </h2>
                  <div
                    id="collapseAnalysis"
                    className="accordion-collapse collapse"
                    data-bs-parent="#nestedAccordion"
                  >
                    <div
                      className={`accordion-body ${
                        isDarkMode ? "bg-dark text-light" : ""
                      }`}
                    >
                      Gain insights into your text with our powerful analysis
                      tools. Count words, characters, lines, paragraphs, and
                      more. Whether you're writing an essay or analyzing code,
                      TextUtil helps you understand your text's structure.
                    </div>
                  </div>
                </div>

                {/* Search and Replace */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        isDarkMode ? "text-light bg-dark" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSearchReplace"
                      aria-expanded="false"
                      aria-controls="collapseSearchReplace"
                    >
                      Search and Replace
                    </button>
                  </h2>
                  <div
                    id="collapseSearchReplace"
                    className="accordion-collapse collapse"
                    data-bs-parent="#nestedAccordion"
                  >
                    <div
                      className={`accordion-body ${
                        isDarkMode ? "bg-dark text-light" : ""
                      }`}
                    >
                      Effortlessly search for specific words or phrases and
                      replace them with just a few clicks. It's a quick and
                      efficient way to make changes to your text without the
                      need for manual editing.
                    </div>
                  </div>
                </div>

                {/* Encoding and Decoding */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        isDarkMode ? "text-light bg-dark" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEncodingDecoding"
                      aria-expanded="false"
                      aria-controls="collapseEncodingDecoding"
                    >
                      Encoding and Decoding
                    </button>
                  </h2>
                  <div
                    id="collapseEncodingDecoding"
                    className="accordion-collapse collapse"
                    data-bs-parent="#nestedAccordion"
                  >
                    <div
                      className={`accordion-body ${
                        isDarkMode ? "bg-dark text-light" : ""
                      }`}
                    >
                      Encode and decode text using Base64 or URL encoding.
                      TextUtil provides a convenient way to transform text for
                      various purposes, including data encoding for web
                      applications.
                    </div>
                  </div>
                </div>

                {/* Dark Mode */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        isDarkMode ? "text-light bg-dark" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseDarkMode"
                      aria-expanded="false"
                      aria-controls="collapseDarkMode"
                    >
                      Dark Mode
                    </button>
                  </h2>
                  <div
                    id="collapseDarkMode"
                    className="accordion-collapse collapse"
                    data-bs-parent="#nestedAccordion"
                  >
                    <div
                      className={`accordion-body ${
                        isDarkMode ? "bg-dark text-light" : ""
                      }`}
                    >
                      Customize your experience with our dark mode feature.
                      Whether you prefer a light or dark interface, TextUtil
                      adapts to your visual preferences.
                    </div>
                  </div>
                </div>
              </div>
              {/* End of nested accordion */}
            </div>
          </div>
        </div>

        {/* How to Use TextUtil */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                isDarkMode ? "text-light bg-dark" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseHowToUse"
              aria-expanded="false"
              aria-controls="collapseHowToUse"
            >
              How to Use TextUtil
            </button>
          </h2>
          <div
            id="collapseHowToUse"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className={`accordion-body ${
                isDarkMode ? "bg-dark text-light" : ""
              }`}
            >
              <div class="list-group">
                <a
                  href="#"
                  class={`list-group-item list-group-item-action ${
                    isDarkMode ? "text-light bg-dark" : ""
                  }`}
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Input Text:</h5>
                  </div>
                  <p class="mb-1">
                    Start by entering or pasting your text into the input area.
                    TextUtil supports a wide range of text formats, making it
                    easy to work with various types of content.
                  </p>
                </a>
                <a
                  href="#"
                  class={`list-group-item list-group-item-action ${
                    isDarkMode ? "text-light bg-dark" : ""
                  }`}
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Choose a Feature:</h5>
                  </div>
                  <p class="mb-1">
                    Select one of the features from the navigation menu, such as
                    text transformation, analysis, or encoding/decoding.
                  </p>
                </a>
                <a
                  href="#"
                  class={`list-group-item list-group-item-action ${
                    isDarkMode ? "text-light bg-dark" : ""
                  }`}
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Explore Options:</h5>
                  </div>
                  <p class="mb-1">
                    Depending on the selected feature, explore additional
                    options such as case conversion, search and replace
                    patterns, or encoding settings.
                  </p>
                </a>
                <a
                  href="#"
                  class={`list-group-item list-group-item-action ${
                    isDarkMode ? "text-light bg-dark" : ""
                  }`}
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">View Results:</h5>
                  </div>
                  <p class="mb-1">
                    See the results instantly in the output area. TextUtil
                    provides real-time updates, allowing you to fine-tune your
                    text according to your needs.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback and Support */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                isDarkMode ? "text-light bg-dark" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFeedback"
              aria-expanded="false"
              aria-controls="collapseFeedback"
            >
              Feedback and Support
            </button>
          </h2>
          <div
            id="collapseFeedback"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className={`accordion-body ${
                isDarkMode ? "bg-dark text-light" : ""
              }`}
            >
              <strong>We value your feedback!</strong> If you have any
              suggestions, encounter issues, or simply want to share your
              experience with TextUtil, feel free to reach out to our support
              team. We are dedicated to continuously improving our platform
              based on user input. Thank you for choosing TextUtil for your text
              processing needs. We hope you find our web app helpful and
              intuitive! Happy text editing! The TextUtil Team
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
