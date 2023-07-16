import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HouseProvide from './components/HouseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HouseProvide >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HouseProvide>
);
