import React from "react";

const ContactUs = () => {
  const style = {
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "5px",
  };
  return (
    <div className="text-center">
      <h1 style={style}>Contact Us</h1>
      <a href="https://github.com/AOB-IT-ADMIN" style={style}>
        Connect on GitHub
      </a>
    </div>
  );
};

export default ContactUs;
