import React from "react";

const ErrorPage = () => {
  const style = {
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "5px",
    color: "red",
  };
  return (
    <div style={style}>
      <h1>Sorry ! 404 Page Not Found</h1>
    </div>
  );
};

export default ErrorPage;
