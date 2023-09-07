import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import WordDisplay from "./WordDisplay";
import GuessInput from "./GuessInput";
import IncorrectGuesses from "./IncorrectGuesses";


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
    z-index: 2;
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

const maxGuesses = 8;


const HangmanGameUI = ({
    secretWord,
    correctGuesses,
    incorrectGuesses,
    remainingGuesses,
    isWordGuessed,
    handleGuess,
  handleNewGame,
}) => {
    return (
        <StyledGameWrapper>
            <WordDisplay secretWord={secretWord} correctGuesses={correctGuesses} />
            {isWordGuessed && <StyledWinnerMessage><p>Congratulations! You guessed the word: <strong>{secretWord}</strong></p></StyledWinnerMessage>}
            <GuessInput handleGuess={handleGuess} />
            <IncorrectGuesses incorrectGuesses={incorrectGuesses} />
            <p>Remaining Guesses: {remainingGuesses}</p>
            {remainingGuesses <= 0 && incorrectGuesses.length === maxGuesses && <p>Sorry pal, you have run out of guesses! The word was: {secretWord}</p>}
            <button
                style={{ zIndex: 3 }}
                className="new-game-button"
                type="button"
                onClick={handleNewGame}
            >
                New Game
            </button>
        </StyledGameWrapper>
    );
};

HangmanGameUI.propTypes = {
    secretWord: PropTypes.string.isRequired,
    correctGuesses: PropTypes.arrayOf(PropTypes.string).isRequired,
    incorrectGuesses: PropTypes.arrayOf(PropTypes.string).isRequired,
    remainingGuesses: PropTypes.number.isRequired,
    isWordGuessed: PropTypes.bool.isRequired,
    handleGuess: PropTypes.func.isRequired,
    handleNewGame: PropTypes.func.isRequired
};
export default HangmanGameUI;