import React from "react";

import "./Button.style.css";

const Button = ({ content, bg, name }) => {
  return <button className={`btn ${bg} ${name}`}>{content}</button>;
};

export default Button;
