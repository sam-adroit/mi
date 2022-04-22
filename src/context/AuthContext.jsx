import React, { createContext, useState } from "react";

export const authContext = createContext();

const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialLogin = localStorage.getItem("isLogin");
  const [token, setToken] = useState(initialToken);

  let [isLoggedIn, setIsLoggedIn] = useState(initialLogin);

  const login = (tokn) => {
    setToken(tokn);
    // console.log("1", isLoggedIn);
    localStorage.setItem("token", tokn);
  };

  const logout = () => {
    setToken("");
    setIsLoggedIn(false);
    localStorage.removeItem("isLogin");
    localStorage.removeItem("token");
  };

  return (
    <authContext.Provider
      value={{ login, token, isLoggedIn, setIsLoggedIn, logout }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
