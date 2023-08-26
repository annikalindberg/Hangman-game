import { createAction } from '@reduxjs/toolkit';

// Action creators using createAction
export const makeGuess = createAction('MAKE_GUESS', (guess) => {
  return { payload: guess };
});

export const startNewGame = createAction('START_NEW_GAME', (secretWord) => {
  return { payload: secretWord };
});
