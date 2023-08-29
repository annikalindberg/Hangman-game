/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
/* import { useDispatch, useSelector } from 'react-redux'; */
import styled from 'styled-components';
import InitialClouds from './CloudsAnimation';
import WordDisplay from './WordDisplay';
import GuessInput from './GuessInput';
import IncorrectGuesses from './IncorrectGuesses';
import { Words } from './WordsArray';
import Header from './Header';

const HangmanGame = () => {
  // initialize state
  const [secretWord, setSecretWord] = useState('')
  const [correctGuesses, setCorrectGuesses] = useState([])
  const [incorrectGuesses, setIncorrectGuesses] = useState([])
  const [remainingGuesses, setRemainingGuesses] = useState(8)
  const maxGuesses = 12;
  const [gameReset, setGameReset] = useState(false);
  const [isWordGuessed, setIsWordGuessed] = useState(false);

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
    setGameReset(false); // set gameReset to false when the component mounts
    const randomIndex = Math.floor(Math.random() * Words.length);
    const randomWord = Words[randomIndex].toLowerCase();
    setSecretWord(randomWord);
    console.log(randomWord);
  }, []);

  const handleGuess = (guess) => {
    guess = guess.toLowerCase(); // convert to lowercase

    if (secretWord.includes(guess) && !correctGuesses.includes(guess)) {
      setCorrectGuesses([...correctGuesses, guess]);
      console.log(correctGuesses);
      if (secretWord.length === correctGuesses.length + 1) {
        setIsWordGuessed(true);
      }
    } else if (!incorrectGuesses.includes(guess)) {
      setIncorrectGuesses([...incorrectGuesses, guess]);
      setRemainingGuesses(remainingGuesses - 1);
      console.log(remainingGuesses);
    }
  };

  const handleNewGame = () => {
    setGameReset(!gameReset) 
    setCorrectGuesses([])
    setIncorrectGuesses([])
    setRemainingGuesses(12)
    setGameReset(true);
    console.log(gameReset);
  }

// STYLED COMPONENTS
  
  const StyledGameWrapper = styled.div`
/*     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 100%;
    height: 100%;
    font-family: 'Mina', sans-serif;
    text-align: center;
    h1 {
      font-size: 2rem;
      color: #3498db;
      @media screen and (max-width: 390px) {
        font-size: 1rem;
      }
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
  const StyledWinnerMessage = styled.p`
  p {
    font-size: 1.2rem;
    background-color: #f7f7f7;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: bounce 1s infinite;

    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    strong {
      font-weight: bold;
    }
  }
`;

  return (
    <>
      <Header />
      <InitialClouds correctGuesses={correctGuesses} gameReset={gameReset} />
      <StyledGameWrapper>
        <WordDisplay secretWord={secretWord} correctGuesses={correctGuesses} />
        {isWordGuessed && <StyledWinnerMessage><p>Congratulations! You guessed the word: <strong>{secretWord}</strong></p></StyledWinnerMessage>}
      <GuessInput handleGuess={handleGuess} />
      <IncorrectGuesses incorrectGuesses={incorrectGuesses} />
      <p>Remaining Guesses: {remainingGuesses}</p>
      {remainingGuesses <= 0 && incorrectGuesses.length === maxGuesses && <p>Sorry pal, you've run out of guesses! The word was: {secretWord}</p>}
        <button
          className="new-game-button"
          type="button"
          onClick={handleNewGame}>New Game
      </button>
        
  
        
    </StyledGameWrapper></>
  )
}


export default HangmanGame