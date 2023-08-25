

### Directory Structure:

```
src/
|-- components/
|  
|   |-- HangmanGame.js
|   |-- WordDisplay.js
|   |-- GuessInput.js
|   |-- IncorrectGuesses.js
    |-- CloudsAnimations.js

|-- App.js
|-- actions/
|   |-- gameActions.js
|-- reducers/
|   |-- gameReducer.js
|-- styles/
|   |-- GlobalStyles.js
|   
|-- utils/
|   |-- api.js
|-- index.js
|-- store.js
|-- ...
```

### Components:

1. **HangmanGame.js**: Main container for the game logic. It manages the state of the game, tracks incorrect guesses, checks for win/loss conditions, etc.

2. **WordDisplay.js**: Displays the secret word as a series of blanks and revealed letters.

3. **GuessInput.js**: Provides an input field for the player to guess a letter. It handles the submission of guesses.

4. **IncorrectGuesses.js**: Displays the incorrect letters that the player has guessed.

5. **App.js:** The entry point . Wraps the entire game and provides a place to set up global styles, routing, and other global functionality.


### Actions and Reducers:

1. gameActions.js: Defines action creators for game-related actions like making a guess, starting a new game, etc.

2. gameReducer.js: Reducer that handles the game's state changes based on dispatched actions.

### Styles:

1. GlobalStyles.js: Defines global styles, such as resetting default margins, fonts, and any other styles that should be consistent across the app.

### Utils:

1. .env: stores the API key for the Wordnik API.

### Redux 

Im using Redux for efficient state management. Actions and reducers will handle game-related state changes. This will help separate the game logic from the presentation components and make codebase more maintainable.

### Styled Components

Im using Styled Components to manage component-specific styles. Each component can have its own styled component definition, allowing me to encapsulate styles within the component itself.
