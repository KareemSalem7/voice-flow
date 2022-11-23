import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/presentation/styles/styleSheets/css/index.css';
import App from '../src/main/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
