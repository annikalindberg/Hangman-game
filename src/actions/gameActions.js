/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
// Action Types
export const MAKE_GUESS = 'MAKE_GUESS';
export const START_NEW_GAME = 'START_NEW_GAME';

// Action Creators
export const makeGuess = (guess) => {
  return {
    type: MAKE_GUESS,
    payload: guess // action payload. This is the data that will be sent to the reducer to update the state
  };
};

export const startNewGame = () => {
  return {
    type: START_NEW_GAME,  // action type
    
  
  };
};
