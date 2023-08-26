/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
import { createSlice } from '@reduxjs/toolkit';
/* import { MAKE_GUESS, START_NEW_GAME } from '../actions/gameActions'; */

const initialState = {
  secretWord: '',
  correctGuesses: [],
  incorrectGuesses: [],
  remainingGuesses: 8
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    makeGuess: (state, action) => {
      const guess = action.payload.toLowerCase();
      const { secretWord, correctGuesses, incorrectGuesses } = state;

      if (secretWord.includes(guess)) {
        if (!correctGuesses.includes(guess)) {
          state.correctGuesses.push(guess);
        }
      } else if (!incorrectGuesses.includes(guess)) {
        state.incorrectGuesses.push(guess);
        state.remainingGuesses -= 1; // means that the state for remainingGuesses will be updated to the current value of remainingGuesses minus 1 
      }
    },
    startNewGame: (state, action) => {
      state.secretWord = action.payload;
      state.correctGuesses = [];
      state.incorrectGuesses = [];
      state.remainingGuesses = 8;
    }
  }
});

export const { makeGuess, startNewGame } = gameSlice.actions;
export default gameSlice.reducer;