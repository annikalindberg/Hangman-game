import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIncorrectGuesses = styled.div`
  text-align: center;
  margin-top: 1rem;
  
  p {
    font-size: 1rem;
    color: #e74c3c;
  }
`;

const IncorrectGuesses = ({ incorrectGuesses }) => {
  return (
    <StyledIncorrectGuesses>
      <p>Incorrect guesses: {incorrectGuesses.join(', ')}</p>
    </StyledIncorrectGuesses>
  );
};

IncorrectGuesses.propTypes = {
  incorrectGuesses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IncorrectGuesses;
