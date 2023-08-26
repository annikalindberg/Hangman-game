import React from 'react';
import PropTypes from 'prop-types';

const WordDisplay = ({ secretWord, correctGuesses }) => {
  const displayWord = secretWord.split('').map((letter) => (
    <span key={letter} className="letter">
      {correctGuesses.includes(letter) ? letter : '_'}
    </span>
  ));

  return (
    <div className="word-display">
      {displayWord}
    </div>
  );
};

WordDisplay.propTypes = {
  secretWord: PropTypes.string.isRequired,
  correctGuesses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WordDisplay;
