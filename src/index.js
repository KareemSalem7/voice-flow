import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/presentation/styles/styleSheets/css/index.css';
import App from '../src/main/App';
import reportWebVitals from './testing/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
