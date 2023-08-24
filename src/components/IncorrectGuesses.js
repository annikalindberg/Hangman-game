import React from 'react';

const IncorrectGuesses = ({ incorrectGuesses }) => {
  return (
    <div className="incorrect-guesses">
      <p>Incorrect guesses: {incorrectGuesses.join(', ')}</p>
    </div>
  );
};

export default IncorrectGuesses;
