import React, { useContext, useState, useRef } from "react";
import axios from "axios";
import Button from "../../button/Button.component";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../../context/AuthContext";
import "./LoginForm.style.css";

function LoginForm() {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login, setIsLoggedIn } = useContext(authContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = usernameRef.current.value;
    const password = passwordRef.current.value;
    setLoading(true);

    axios
      .post("https://mexd-backend.herokuapp.com/signin-admin", {
        email: email,
        password: password,
      })
      .then((res) => {
        setIsLoggedIn(true);
        localStorage.setItem("isLogin", true);
        login(res.data.data.token);
        navigate("/dashboard");
      })
      .catch(() => {
        setErr(true);
        setLoading(false);
      });
  };

  return (
    <div className="login-form">
      <h4>Log in as an Admin or Sales Agent </h4>
      <form className="login-form-field" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="username">Email/ID</label>

          <input
            type="text"
            name="username"
            ref={usernameRef}
            placeholder="Email or ID"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>

          <input
            type="password"
            name="password"
            ref={passwordRef}
            placeholder="..........."
            required
          />
        </div>
        {err && (
          <p style={{ color: "red", fontSize: "0.7rem" }}>
            ** Incorrect Username or Password, try again! **
          </p>
        )}
        <Button
          bg="dark"
          content={!loading ? "Login" : "Loading..."}
          name="login-btn"
        />
      </form>
      <p>Forgot Password?</p>
    </div>
  );
}

export default LoginForm;
