import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import EmbedCalculatorPage from './pages/EmbedCalculatorPage';
import './index.css';

const path = window.location.pathname;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {path.startsWith('/rechner-embed') ? <EmbedCalculatorPage /> : <App />}
  </React.StrictMode>
);
