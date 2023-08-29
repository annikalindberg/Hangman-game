import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledGuessInput = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  input {
    width: 2.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    text-align: center;
    border: 2px solid #3498db;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.3s;
  }

  input:focus {
    border-color: #e74c3c;
  }

  button {
    margin-left: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    background-color: #e74c3c;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #c0392b;
  }
`;

const GuessInput = ({ handleGuess }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      handleGuess(input);
      setInput('');
      console.log(input + ' was guessed!');
    }
  };

  return (
    <StyledGuessInput onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        maxLength={1}
        aria-label="Guess a letter"
      />
      <button type="submit">Guess</button>
    </StyledGuessInput>
  );
};

GuessInput.propTypes = {
  handleGuess: PropTypes.func.isRequired,
};

export default GuessInput;
