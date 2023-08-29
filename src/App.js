import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import HangmanGame from './components/HangmanGame'
import './index.css'

import gameReducer from 'reducers/gameReducer'


const reducer = combineReducers({
  game: gameReducer.reducer
});
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
        <HangmanGame />

    </Provider>
  )
}
