// App.jsx
import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import { auth } from "./firebase";
import "./App.css";
import EmailAssistantAnimation from "./components/EmailAssistantAnimation";

function App() {
  const [user, setUser] = useState(null);
  const [priorities, setPriorities] = useState(null);
  const [isFirstLogin, setIsFirstLogin] = useState(null);

  // TODO: Need to change this to use the backend database
  const handleLogin = (userData) => {
    console.log("User logged in:", userData);
    setUser(userData);

    const savedPriorities = JSON.parse(localStorage.getItem("userPriorities"));
    if (!savedPriorities) {
      setIsFirstLogin(true);
      console.log("First login detected, showing preferences");
    } else {
      setIsFirstLogin(false);
      setPriorities(savedPriorities);
      console.log("Preferences found, skipping prompt");
    }
  };

  // TODO: Need to change this to use the backend database
  const handleSavePreferences = (newPriorities) => {
    console.log("Saving preferences:", newPriorities);
    setPriorities(newPriorities);
    localStorage.setItem("userPriorities", JSON.stringify(newPriorities));
    console.log("Preferences saved in LocalStorage:", localStorage.getItem("userPriorities"));
    setIsFirstLogin(false);
  };

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        console.log('User logged out');
        setUser(null);
      })
      .catch(error => {
        console.error('Error during logout:', error);
      });
  };

  return (
    <div className="App">
      <h1>Hack Ireland 2025</h1>
      <h2>Group 37</h2>
      <EmailAssistantAnimation />

      <br />

      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          {isFirstLogin === null ? (
            <p>Loading...</p>
          ) : isFirstLogin ? (
            <>
              <p>Waiting for your preferences...</p>
              <Preferences onSave={handleSavePreferences} priorities={priorities} />
            </>
          ) : (
            <Dashboard user={user} priorities={priorities} onLogout={handleLogout} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
