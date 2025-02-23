// src/constants/endpoints.js

// Option A: Hardcode your backend base URL here
const BASE_URL = "https://your-backend.com/api";

// Option B: Use an environment variable (e.g., Vite) for easier config
// const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const ENDPOINTS = {
  // Used in Dashboard.jsx for "Yes" in EmailPermissionModal
  ALLOW_EMAIL_ACCESS: `${BASE_URL}/allow-email-access`,

  // Used in Dashboard.jsx to fetch tasks
  GET_TASKS: `${BASE_URL}/tasks`,

  // Used in Dashboard.jsx to fetch unread email count
  GET_UNREAD_EMAIL_COUNT: `${BASE_URL}/emails/unread-count`,

  // Used in Chatbot.jsx to send user messages and get bot replies
  CHATBOT: `${BASE_URL}/chatbot`,
};
