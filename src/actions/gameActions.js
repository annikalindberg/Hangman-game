/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
import axios from 'axios';
import { FETCH_SECRET_WORD_REQUEST, FETCH_SECRET_WORD_SUCCESS, FETCH_SECRET_WORD_FAILURE, MAKE_GUESS, START_NEW_GAME } from './actionTypes';

export const fetchSecretWord = () => {
  return async (dispatch) => {
    dispatch(fetchSecretWordRequest()); // this is calling the fetchSecretWordRequest action creator and dispatching the action that it returns to the store to update the state
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/randomword', {
        headers: {
          'X-Api-Key': 'D8B0EE0Qh1Dg5Hq0gvJ57nW8nskqhvzIckawsswO'
        }
      });
      console.log('Response data:', response.data); // Log the response data

      const secretWord = response.data.word; // this is storing the secret word in the secretWord variable. .word is needed to convert the response data into a string
      dispatch(fetchSecretWordSuccess(secretWord));  // this is calling the fetchSecretWordSuccess action creator and dispatching the action that it returns to the store to update the state
    } catch (error) {
      console.error('Error fetching random word:', error); // Log any errors
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
