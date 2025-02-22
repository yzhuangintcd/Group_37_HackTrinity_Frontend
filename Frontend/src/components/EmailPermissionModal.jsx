import React from "react";
import "./EmailPermissionModal.css";
const EmailPermissionModal = ({ onPermission, onCancel }) => {
  return (
    <div className="modal">
      <h2 className="modal-message">Do you allow us, Hack Ireland Group 37, to access your emails?</h2>
      <div className="modal-buttons">
        <button onClick={() => onPermission(true)}>Yes</button>
        <button onClick={() => onCancel()}>No</button>
      </div>
    </div>
  );
};

export default EmailPermissionModal;