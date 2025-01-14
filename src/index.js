
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import Admin from './Admin'

// Setup Axios once here
axios.defaults.headers = { Accept: 'application/json' };
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
export default axiosInstance;

// Define renderWidget function and attach it to the global window object
window.renderWidget = function (div) {
  const symbol = div.dataset.symbol;

  ReactDOM.render(
    <React.StrictMode>
      <App symbol={symbol} />
    </React.StrictMode>,
    div
  );
};
// Define renderWidget function and attach it to the global window object
window.renderWidgetAdmin = function (div) {
  const symbol = div.dataset.symbol;

  ReactDOM.render(
    <React.StrictMode>
      <Admin symbol={symbol} />
    </React.StrictMode>,
    div
  );
};
