/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom'; // Import createRoot from react-dom
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store'; // Import your Redux store
import { App } from './App'; // Import your App component
import './index.css';
import GlobalStyles from './styles/GlobalStyles';

// Use createRoot to start rendering your application
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Wrap your App component with Provider to make Redux store available to all components
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
