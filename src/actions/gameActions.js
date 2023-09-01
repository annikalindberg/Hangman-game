/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
import { Axios } from 'axios';
import { FETCH_SECRET_WORD_REQUEST, FETCH_SECRET_WORD_SUCCESS, FETCH_SECRET_WORD_FAILURE, MAKE_GUESS, START_NEW_GAME } from './actionTypes';

export const fetchSecretWord = () => {
  return async (dispatch) => {
    dispatch(fetchSecretWord());
    try {
      const response = await Axios.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
          'X-Api-Key': 'D8B0EE0Qh1Dg5Hq0gvJ57nW8nskqhvzIckawsswO'
        }
      });
  

      /* const response = await fetch('http://localhost:3030'); */ // this is making a request to the server to get the secret word from my hard-coded array of words in the server.js file and storing the response object in the response variable

  

      const secretWord = response.data // this is storing the secret word in the secretWord variable
      dispatch(fetchSecretWordSuccess(secretWord));  // this is calling the fetchSecretWordSuccess action creator and dispatching the action that it returns to the store to update the state
    } catch (error) {
      dispatch(fetchSecretWordFailure(error.message));
    }
  };
};


// Action creator for requesting the secret word
export const fetchSecretWordRequest = () => ({
  type: FETCH_SECRET_WORD_REQUEST,
});

// Action creator for successfully receiving the secret word
export const fetchSecretWordSuccess = (secretWord) => ({
  type: FETCH_SECRET_WORD_SUCCESS,
  payload: secretWord,
});

// Action creator for encountering an error while fetching
export const fetchSecretWordFailure = (error) => ({
  type: FETCH_SECRET_WORD_FAILURE,
  payload: error,
});

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
