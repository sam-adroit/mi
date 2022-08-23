import React from "react";
import App from "../../../assets/app.png";
import Phone from "../../../assets/p1.png";

function Apps() {
  return (
    <div>
      <h2>THE MOON APP</h2>
      <div className="text-app">
        <div className="about-app">
          <p>A mobile interface that help you monitor your inverter</p>
          <button>Log in</button>
        </div>
        <div className="app-display">
          <img src={App} alt="App Display" />
        </div>
      </div>
      <div className="app-text">
        <div className="app-display">
          <img src={Phone} alt="App Display" />
          <img src={Phone} alt="App Display" />
        </div>
        <div className="about-app">
          <p>
            An innovation that leverages on artificial intelligence in providing
            smart inverters
          </p>
          <button>Log in</button>
        </div>
      </div>
    </div>
  );
}

export default Apps;
