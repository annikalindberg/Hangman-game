/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
/* import { useDispatch, useSelector } from 'react-redux'; */
import styled from 'styled-components';
import InitialClouds from './CloudsAnimation';
import WordDisplay from './WordDisplay';
import GuessInput from './GuessInput';
import IncorrectGuesses from './IncorrectGuesses';

import { weatherWords } from './WordsArray';

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
      console.log(correctGuesses);
    } else if (!incorrectGuesses.includes(guess)) {
      setIncorrectGuesses([...incorrectGuesses, guess]);
      setRemainingGuesses(remainingGuesses - 1);
      console.log(remainingGuesses);
    }
  };
 /*  const handleNewGame = () => {
    const randomIndex = Math.floor(Math.random() * weatherWords.length);
    const randomWord = weatherWords[randomIndex].toLowerCase();
    dispatch(startNewGame(randomWord));
    console.log('New game started!');
  }; */

// STYLED COMPONENTS
  
  const StyledGameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 100%;
    height: 100%;
    font-family: 'Mina', sans-serif;
    text-align: center;
    h1 {
      font-size: 2rem;
      color: #3498db;
    }
    .new-game-button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: none;
      border-radius: 8px;
      background-color: #e74c3c;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .new-game-button:hover {
      background-color: #c0392b;
    }
    p {
      font-size: 1rem;
      color: #333;
    }
   `;
    

  return (
    <>
    <InitialClouds />
      <StyledGameWrapper>
<h1>Whats behind the clouds?</h1>
      <GuessInput handleGuess={handleGuess} />
      <IncorrectGuesses incorrectGuesses={incorrectGuesses} />
      <p>Remaining Guesses: {remainingGuesses}</p>
      {remainingGuesses <= 0 && incorrectGuesses.length === maxGuesses && <p>Sorry pal, you've run out of guesses! The word was: {secretWord}</p>}
      <button
        className="new-game-button"
        type="button"
        onClick={() => window.location.reload(false)}>New Game
      </button>
      <WordDisplay secretWord={secretWord} correctGuesses={correctGuesses} />
    </StyledGameWrapper></>
  )
}


export default HangmanGame