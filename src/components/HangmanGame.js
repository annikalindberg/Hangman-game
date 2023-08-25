/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react'
/* import axios from 'axios' */
import styled from 'styled-components'
import InitialClouds from './CloudsAnimation'
import WordDisplay from './WordDisplay'
import GuessInput from './GuessInput'
import IncorrectGuesses from './IncorrectGuesses'
import sun from '../assets/sun.png'
import { weatherWords } from './WordsArray'

const HangmanGame = () => {
  // initialize state
  const [secretWord, setSecretWord] = useState('')
  const [correctGuesses, setCorrectGuesses] = useState([])
  const [incorrectGuesses, setIncorrectGuesses] = useState([])
  const [remainingGuesses, setRemainingGuesses] = useState(8)
  const maxGuesses = 8;
  /* const [gameOver, setGameOver] = useState(false) */

  // fetch a random word from the API
  /*  const fetchRandomWord = async () => {
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
          'X-Api-Key': process.env.REACT_APP_API_KEY
        }
      });
*/

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * weatherWords.length);
    const randomWord = weatherWords[randomIndex].toLowerCase();
    setSecretWord(randomWord);
    console.log(randomWord);
  }, []);

  const handleGuess = (guess) => {
    guess = guess.toLowerCase(); // convert to lowercase

    if (secretWord.includes(guess) && !correctGuesses.includes(guess)) {
      setCorrectGuesses([...correctGuesses, guess]);
    } else if (!incorrectGuesses.includes(guess)) {
      setIncorrectGuesses([...incorrectGuesses, guess]);
      setRemainingGuesses(remainingGuesses - 1);
      console.log(remainingGuesses);
    }
  };

  return (
    <div className="hangman-game">
      <InitialClouds />
      <Sun src={sun} alt="sun" top={50} left={100} />
      <h1>Whats behind the clouds?</h1>
      <WordDisplay secretWord={secretWord} correctGuesses={correctGuesses} />
      <GuessInput handleGuess={handleGuess} />
      <IncorrectGuesses incorrectGuesses={incorrectGuesses} />
      <p>Remaining Guesses: {remainingGuesses}</p>
      {remainingGuesses <= 0 && incorrectGuesses.length === maxGuesses && <p>Sorry pal, you've run out of guesses! The word was: {secretWord}</p>}
      <button
        className="new-game-button"
        type="button"
        onClick={() => window.location.reload(false)}>New Game
      </button>
    </div>
  )
}

const Sun = styled.img`
  width: 100px;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  z-index: -1; /* Set a negative z-index to place it behind clouds */
`;

export default HangmanGame
