import React, { useState, useEffect } from "react";
import "./Preferences.css";

const Preferences = ({ onSave, priorities }) => {
  const [categories, setCategories] = useState("");

  useEffect(() => {
    if (priorities && priorities.categories) {
      setCategories(priorities.categories.join(", "));
    }
  }, [priorities]);

const handleSubmit = (e) => {
  e.preventDefault();  // Prevent page reload on form submission

  const newPriorities = {
    categories: categories.split(",").map((item) => item.trim())
  };

  console.log("Calling onSave with:", newPriorities);  // Debugging Log
  onSave(newPriorities);  // Call the function passed from App.jsx
};


    return (
    <div className="preferences-container">
      {/* // TODO: Allow user to set their priorities, and reset their priorities */}
    <h2>{localStorage.getItem('userPriorities') ? 'Reset Your Priorities' : 'Set Your Priorities'}</h2>

    {/* // TODO: Allow user to set their priorities, and reset their priorities, from the input box and chatbot*/}
    {/* // TODO: Store the priorities in the backend database*/}
    <form onSubmit={handleSubmit}>
        <div className="priority-input-box">
        <label className="priority-input-message">
            Input Your Top 3 Priorities Please (comma-separated): 
        </label>
        <input
            className="priority-input"
            type="text"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
            placeholder="e.g., work, family"
          />
        </div>

        <br />
        {/* // TODO: Save the preferences in the backend database */}
        <button type="submit" className="save-button" onClick={handleSubmit}>
          Save Preferences
        </button>
      </form>
    </div>
  );
};

export default Preferences;