import React from 'react';
import PropTypes from 'prop-types';

const IncorrectGuesses = ({ incorrectGuesses }) => {
  console.log(incorrectGuesses);
  return (
    <div className="incorrect-guesses">
      <p>Incorrect guesses: {incorrectGuesses.join(', ')}</p>
    </div>
  );
};
IncorrectGuesses.propTypes = {
  incorrectGuesses: PropTypes.arrayOf(PropTypes.string).isRequired,

};

export default IncorrectGuesses;
