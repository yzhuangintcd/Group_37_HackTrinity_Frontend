import React from 'react';
import { auth, provider, signInWithPopup } from '../firebase';  // Import signInWithPopup from firebase.js
import "./Login.css";

const Login = ({ onLogin }) => {
  const handleGoogleLoginClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);  // Use the signInWithPopup method
      const user = result.user;
      console.log("User logged in:", user);
      // Notify the parent component (App.jsx) about the successful login
      onLogin(user);  // Passing the user data to App.jsx via onLogin
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleMicrosoftLoginClick = async () => {
    console.log("Microsoft login clicked");
  };

  const handleAppleLoginClick = async () => {
    console.log("Apple login clicked");
  };


  return (
    <div className="login-box">
      <div className="login-buttons">
        <button onClick={handleGoogleLoginClick}>Login with Google</button>
        <button onClick={handleMicrosoftLoginClick}>Login with Microsoft</button>
        <button onClick={handleAppleLoginClick}>Login with Apple</button>
      </div>
    </div>
  );
};

export default Login;