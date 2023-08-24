import React, { useState } from 'react';

const GuessInput = ({ handleGuess }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      handleGuess(input);
      setInput('');
    }
  };

  return (
    <form className="guess-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        maxLength={1}
        aria-label="Guess a letter" />
      <button type="submit">Guess</button>
    </form>
  );
};

export default GuessInput;
