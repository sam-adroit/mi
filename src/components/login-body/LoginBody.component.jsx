import React from "react";
import LoginForm from "./loginForm/LoginForm.component";
import LeftContent from "./left-content/LeftContent.component";

import "./LoginBody.style.css";

const LoginBody = () => {
  return (
    <div className="loginBody">
      <LeftContent />
      <LoginForm />
    </div>
  );
};

export default LoginBody;
