import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TosTopBar from './components/TosTopBar';

// The ! stops the compiler from crying, it will never be null.
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <TosTopBar height={60} />
    <App />
  </React.StrictMode>
);
