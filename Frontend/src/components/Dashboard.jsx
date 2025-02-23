import React, { useState, useEffect } from "react";
import Preferences from "./Preferences";
import EmailPermissionModal from "./EmailPermissionModal";
import "./Dashboard.css";
import Chatbot from "./Chatbot";

const randomPlaceholder = Math.floor(Math.random() * 100);

const Dashboard = ({ user, priorities, onLogout }) => {
  const [prioritiesState, setPrioritiesState] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // NEW: track whether each task is checked
  const [taskCompletion, setTaskCompletion] = useState({});

  useEffect(() => {
    const savedPriorities = JSON.parse(localStorage.getItem("userPriorities"));
    if (savedPriorities) {
      setPrioritiesState(savedPriorities);
      setShowModal(true); // Show the email permission modal if priorities exist
    }
  }, []);

  const handlePermission = (isAllowed) => {
    if (isAllowed) {
      // Placeholder fetch call to your backend
      fetch("https://your-backend.com/api/allow-email-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id || "testuser1",
          permission: true,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Backend Response:", data);
        })
        .catch((error) => console.error("Error:", error));

      setShowModal(false);
    }
  };

  const handleCancelPermission = () => {
    setShowModal(false);
    onLogout(); // Logs the user out if they deny permission
  };

  // Hardcoded placeholders for demonstration
  const unreadEmailCount = randomPlaceholder;
  const importantEmails = [
    { id: 1, subject: "Project Update", snippet: "Important update about the project." },
    { id: 2, subject: "Family Dinner", snippet: "Don't forget our Dinner tomorrow." },
    { id: 3, subject: "Invoice Due", snippet: "Your invoice is due next week." },
  ];

  // Handler to toggle each task's completion
  const handleTaskCheck = (taskId) => {
    setTaskCompletion((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  return (
    <div className="dashboard-page">
      {/* Left column: Dashboard Card */}
      <div className="dashboard-card">
        <h2>Profile Overview</h2>
        {prioritiesState ? (
          <div>
            <p>
              <strong>Priorities:</strong> {prioritiesState.categories.join(", ")}
            </p>
          </div>
        ) : (
          <p>No priorities set yet.</p>
        )}

        <div className="email-summary">
          <p>
            <strong>Unread Emails:</strong> {unreadEmailCount}
          </p>
          <div className="important-emails">
            <h4>Tasks</h4>
          <ul className="task-list">
            {importantEmails.map((email) => (
              <li key={email.id} className="task-item">
                <label>
                  <input
                    type="checkbox"
                    checked={!!taskCompletion[email.id]}
                    onChange={() => handleTaskCheck(email.id)}
                    className="task-checkbox"
                  />
                  <strong className="task-title">{email.subject}</strong>: {email.snippet}
                </label>
              </li>
            ))}
          </ul>

          </div>
        </div>

        <button onClick={onLogout} className="logout-button">Log Out</button>
      </div>

      {/* Right column: Preferences Card */}
      <div className="preferences-card">
        <Preferences
          onSave={setPrioritiesState}
          priorities={prioritiesState}
        />
      </div>

      {showModal && (
        <EmailPermissionModal
          onPermission={handlePermission}
          onCancel={handleCancelPermission}
        />
      )}
      <Chatbot />
    </div>
  );
};

export default Dashboard;
