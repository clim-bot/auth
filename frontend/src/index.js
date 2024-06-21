import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';  // Import the reportWebVitals function
import './styles/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <App />
    </Router>
);

// Measure performance in your app, pass a function to log results
// or send to an analytics endpoint. For example: reportWebVitals(console.log)
reportWebVitals(console.log);
