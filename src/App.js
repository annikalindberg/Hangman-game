import React from 'react'
import HangmanGame from './components/HangmanGame'
import GlobalStyles from './styles/GlobalStyles'

export const App = () => {
  return (
    <div className="app">
      <GlobalStyles />
      <HangmanGame />
    </div>
  )
}
