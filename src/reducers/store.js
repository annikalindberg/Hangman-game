import { combineReducers } from 'redux';
import gameReducer from './gameReducer'; // Update with the actual path to your game reducer

export const rootReducer = combineReducers({
    game: gameReducer,
    // Other reducers can be added here if you have them
});

export const selectGame = (state) => state.game; // this is a selector that can be used to get the game state from the store in any component by importing it and calling it like so: useSelector(selectGame) or connect((state) => ({ game: selectGame(state) })) or by useSelectGame() if you are using redux-toolkit's createSlice function