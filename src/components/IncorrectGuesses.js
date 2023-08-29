import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIncorrectGuesses = styled.div`
  text-align: center;
  margin-top: 1rem;
  
 p {
    font-size: 1rem;
    color: #e74c3c;
    animation: ${props => props.incorrectGuesses.length > 0 ? 'bump 0.5s alternate infinite' : 'none'};
  }
  

  /* Define the animation keyframes */
  @keyframes bump {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-5px);
    }
  }
`;
const IncorrectGuesses = ({ incorrectGuesses }) => {
  return (
    <StyledIncorrectGuesses incorrectGuesses={incorrectGuesses}>
      <p>Incorrect guesses: {incorrectGuesses.join(', ')}</p>
    </StyledIncorrectGuesses>
  );
};

IncorrectGuesses.propTypes = {
  incorrectGuesses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IncorrectGuesses;
