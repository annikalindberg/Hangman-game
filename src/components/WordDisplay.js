import React from 'react';

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

export default WordDisplay;
