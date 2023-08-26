/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import InitialClouds from './CloudsAnimation';
import WordDisplay from './WordDisplay';
import GuessInput from './GuessInput';
import IncorrectGuesses from './IncorrectGuesses';
import Sun from './Sun';
import { makeGuess, startNewGame } from '../actions/gameActions';
import { weatherWords } from './WordsArray';

const HangmanGameContainer = styled.div`
  border: 1px solid rebeccapurple;
`;

const HangmanGame = () => {
  const dispatch = useDispatch();
  const { secretWord, correctGuesses, incorrectGuesses, remainingGuesses } = useSelector((state) => state.game);
  const maxGuesses = 8;

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * weatherWords.length);
    const randomWord = weatherWords[randomIndex].toLowerCase();
    dispatch(startNewGame(randomWord));
  }, [dispatch]);

  const handleGuess = (guess) => {
    dispatch(makeGuess(guess));
  };

  const handleNewGame = () => {
    const randomIndex = Math.floor(Math.random() * weatherWords.length);
    const randomWord = weatherWords[randomIndex].toLowerCase();
    dispatch(startNewGame(randomWord));
  };

  return (
    <HangmanGameContainer>
      <InitialClouds />
      <Sun isVisible={correctGuesses.length > 0} />
      <h1>What's behind the clouds?</h1>
      <WordDisplay secretWord={secretWord} correctGuesses={correctGuesses} />
      <GuessInput handleGuess={handleGuess} />
      <IncorrectGuesses incorrectGuesses={incorrectGuesses} />
      <p>Remaining Guesses: {remainingGuesses}</p>
      {remainingGuesses <= 0 && incorrectGuesses.length === maxGuesses && (
        <p>Sorry pal, you've run out of guesses! The word was: {secretWord}</p>
      )}
      <button className="new-game-button" type="button" onClick={handleNewGame}>
        New Game
      </button>
    </HangmanGameContainer>
  );
};

export default HangmanGame;
