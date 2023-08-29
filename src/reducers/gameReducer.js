/* eslint-disable no-case-declarations */
import { MAKE_GUESS, START_NEW_GAME } from '../actions/gameActions';

const initialState = {
  secretWord: '',
  correctGuesses: [],
  incorrectGuesses: [],
  remainingGuesses: 8,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_GUESS:
      const guess = action.payload.toLowerCase();
      const { secretWord, correctGuesses, incorrectGuesses, remainingGuesses } = state;

      if (secretWord.includes(guess)) {
        if (!correctGuesses.includes(guess)) {
          return {
            ...state,
            correctGuesses: [...correctGuesses, guess],
          };
        }
      } else if (!incorrectGuesses.includes(guess)) {
        return {
          ...state,
          incorrectGuesses: [...incorrectGuesses, guess],
          remainingGuesses: remainingGuesses - 1,
        };
      }

      return state;

    case START_NEW_GAME:
     
      return initialState;

    default:
      return state;
  }
};

export default gameReducer;