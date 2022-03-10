import React from "react";
import Button from "../../button/Button.component";

import "./LoginForm.style.css";

function LoginForm() {
  return (
    <div className="login-form">
      <h4>Log in as an Admin or Sales Agent </h4>
      <form className="login-form-field">
        <div className="form-control">
          <label htmlFor="email-id">Email/ID</label>

          <input type="text" placeholder="Email or ID" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>

          <input type="password" placeholder="Password" />
        </div>
        <Button bg="dark" content="Login" name="login-btn" />
      </form>
      <p>Forgot Password?</p>
    </div>
  );
}

export default LoginForm;
