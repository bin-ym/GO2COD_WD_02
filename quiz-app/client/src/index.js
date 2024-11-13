// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';  // Import createRoot from react-dom/client for React 18
import './index.css';  // Tailwind imports here
import App from './components/App';  // Ensure path is correct

// Create a root to render the application
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
