import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18+
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
// import './index.css'; // Assuming you use this CSS file

// Create a root element to render your app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
