// EmailAssistantAnimation.jsx
import React from "react";
import "./EmailAssistantAnimation.css";

const EmailAssistantAnimation = () => {
  return (
    <div className="animation-container">
      {/* The text stays centered */}
      <h3 className="assistant-title">AI Task Assistant</h3>

      {/* The icon + notification bubble is absolutely positioned and animated */}
      <div className="icon-and-notif">
        <span className="notification-count" id="notif-start">99+</span>
        <span className="notification-count" id="notif-end">0</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/561/561127.png" 
          alt="Email Icon"
          className="email-icon"
        />
      </div>
    </div>
  );
};

export default EmailAssistantAnimation;
