/* eslint-disable no-case-declarations */

import { MAKE_GUESS, START_NEW_GAME, FETCH_SECRET_WORD_FAILURE, FETCH_SECRET_WORD_REQUEST, FETCH_SECRET_WORD_SUCCESS } from "actions/actionTypes";

  
// this is also set in the gameActions.js file
const initialState = {
  secretWord: '',
  loading: false,
  error: null,
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
    
    case FETCH_SECRET_WORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    
    case FETCH_SECRET_WORD_SUCCESS:
      return {
        ...state,
        loading: false,
        secretWord: action.payload,
      };
    
    case FETCH_SECRET_WORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    
    default:
      return state;
    
  }
};

export default gameReducer;