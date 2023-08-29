import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWordDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1.5rem;
  margin: 1rem;
  text-align: center;

  .letter {
    display: inline-block;
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    margin: 0.25rem;
    font-weight: bold;
    font-size: 3rem;
    border: 2px solid #f39c12;
    border-radius: 50%;
    background-color: #f39c12;
    color: white;
    text-align: center;
    transition: background-color 0.3s, color 0.3s;
    
  }

  .letter.hidden {
    background-color: transparent;
    color: #f39c12;
  }
`;

const WordDisplay = ({ secretWord, correctGuesses }) => {
  const displayWord = secretWord.split('').map((letter) => (
    <span key={letter} className={`letter ${correctGuesses.includes(letter) ? '' : 'hidden'}`}>
      {correctGuesses.includes(letter) ? letter : '_'}
    </span>
  ));

  return <StyledWordDisplay>{displayWord}</StyledWordDisplay>;
};

WordDisplay.propTypes = {
  secretWord: PropTypes.string.isRequired,
  correctGuesses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WordDisplay;
