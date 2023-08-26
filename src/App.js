import React from 'react'
import { Provider } from 'react-redux'
import HangmanGame from './components/HangmanGame'
import store from './store'
import GlobalStyles from './styles/GlobalStyles'
import './index.css'


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
