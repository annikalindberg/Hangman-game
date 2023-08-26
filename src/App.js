import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from 'redux-toolkit'
import HangmanGame from './components/HangmanGame'
import GlobalStyles from './styles/GlobalStyles'
import './index.css'

const reducer = combineReducers({
  game: HangmanGame.reducer
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
