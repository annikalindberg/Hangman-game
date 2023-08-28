import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import HangmanGame from './components/HangmanGame'
/* import store from './store' */
import GlobalStyles from './styles/GlobalStyles'
import './index.css'
import gameReducer from 'reducers/gameReducer'

const reducer = combineReducers({
  game: gameReducer.reducer
});
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <GlobalStyles />
        <HangmanGame />
      </div>
    </Provider>
  )
}
