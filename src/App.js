import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/store'; // Import the rootReducer from your store.js
import HangmanGameLogic from 'components/HangmanGameLogic';
import './index.css';
import Header from 'components/Header';
import Footer from 'components/Footer';

export const App = () => {

 const store = configureStore({
   reducer: rootReducer,
 }); 
  
  return (

    <Provider store={store}>
      <Header />
      <HangmanGameLogic />
      <Footer />
  </Provider>
);
};