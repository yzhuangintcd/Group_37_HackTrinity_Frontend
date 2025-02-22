// Chatbot.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";
import VoiceWave from "./VoiceWave";

// Check for SpeechRecognition browser support
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition || null;

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null);

  // Initialize SpeechRecognition if supported
  useEffect(() => {
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log("Transcript:", transcript);
        setListening(false);

        // Automatically send the recognized speech to the chatbot
        // handleSendMessage(transcript);
        setUserInput(transcript);
      };

      recognitionRef.current.onerror = (err) => {
        console.error("Speech recognition error:", err);
        setListening(false);
      };

      recognitionRef.current.onend = () => {
        setListening(false);
      };
    }
  }, []);

  // Handle sending a message (either from user typing or speech)
  const handleSendMessage = (speechText) => {
    // If speechText is provided, use that; otherwise, use userInput state
    const finalText = speechText || userInput;
    if (!finalText.trim()) return;

    // Create user message
    const userMessage = { sender: "user", text: finalText };

    // Clear the input box (if this was from typing)
    setUserInput("");

    // Add user message to conversation
    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot response (replace with real API call if needed)
    // TODO: Get the response from the backend
    const botResponse = { sender: "bot", text: "This is a placeholder reply." };
    setMessages((prev) => [...prev, botResponse]);
  };

  // Handle manual text input (typing + "Send" button)
  const handleSendButtonClick = () => {
    handleSendMessage(); // no argument => will use userInput
  };

  // Start/stop voice recognition
  const handleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert("SpeechRecognition not supported in this browser.");
      return;
    }

    if (!listening) {
      setListening(true);
      recognitionRef.current.start();
    } else {
      setListening(false);
      recognitionRef.current.stop();
    }
  };

  return (
    <div className="chatbot-container">
      <h2 className="chatbot-header">Assistant</h2>

      {/* If currently listening, show the wave animation */}
      {listening && <VoiceWave />}

      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div className="chatbot-input">
        <input
          type="text"
          value={userInput}
          placeholder="Type your message..."
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendButtonClick()}
        />
        {/*// TODO: Send user message to backend */}
        <button onClick={handleSendButtonClick} className="send-button">
          Send
        </button>
        <button onClick={handleVoiceInput} className="voice-button">
          {listening ? "Stop" : "Voice"}
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
