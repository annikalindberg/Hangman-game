import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeGuess, startNewGame } from '../actions/gameActions';
import { selectGame } from '../reducers/store';
import HangmanGameUI from './HangmanGameUI'; // This is a new component that will handle UI rendering

/* const maxGuesses = 8; */

const HangmanGameLogic = () => {
    const dispatch = useDispatch();
    const { secretWord, correctGuesses, incorrectGuesses, remainingGuesses, isWordGuessed } = useSelector(selectGame); // useSelector is here calling the selectGame selector and passing in the state from the store as an argument. The selectGame selector is returning the game state from the store. The game state is then destructured into the variables secretWord, correctGuesses, incorrectGuesses, remainingGuesses, and isWordGuessed. 
    console.log('game state', useSelector(selectGame));
    console.log('secretWord', secretWord);

    const handleGuess = (guess) => {
        dispatch(makeGuess(guess));
    }; // this is calling the makeGuess action creator and dispatching the action that it returns to the store to update the state
    console.log('secretWord', secretWord);

    const handleNewGame = () => {
        dispatch(startNewGame());
    }; // this is calling the startNewGame action creator and dispatching the action that it returns to the store to update the state

    return (
        <HangmanGameUI
            secretWord={secretWord}
            correctGuesses={correctGuesses}
            incorrectGuesses={incorrectGuesses}
            remainingGuesses={remainingGuesses}
            isWordGuessed={isWordGuessed}
            handleGuess={handleGuess}
            handleNewGame={handleNewGame}
        />
    );
};

export default HangmanGameLogic;
