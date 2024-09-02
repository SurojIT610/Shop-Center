import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS with Popper
import '@fortawesome/fontawesome-free/css/all.min.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Create a root

root.render(
  <Router> {/* Wrap your app with Router */}
    <App />
  </Router>
);
