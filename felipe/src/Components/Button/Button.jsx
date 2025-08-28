import React from "react";
import "./Button.css";

const Button = ({ text, textColor = "#fff", bgColor = "#007BFF", onClick }) => {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {text}
    </button>
  );
};

export default Button;
