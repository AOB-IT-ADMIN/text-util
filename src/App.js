import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import About from "./components/About";
import "./sass/App.css";
import { useState } from "react";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <Router>
      <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
        {/* Render the Navbar component */}
        <Navbar onToggleMode={toggleMode} />

        {/* Render the Heading component */}
        <Heading text="Text Util App" isDarkMode={isDarkMode} />

        <Routes>
          <Route path="/" element={<Body isDarkMode={isDarkMode} />} />
          <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
          <Route
            path="/contact"
            element={<ContactUs isDarkMode={isDarkMode} />}
          />
          <Route path="/*" element={<ErrorPage isDarkMode={isDarkMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
