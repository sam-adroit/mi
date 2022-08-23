import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import SidebarContextProvider from "./context/SidebarContext";
import AuthContextProvider from "./context/AuthContext";
import InverterDetailsContextProvider from "./context/InverterDetailsContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <InverterDetailsContextProvider>
        <SidebarContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SidebarContextProvider>
      </InverterDetailsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
