## Hangman Game Project
### My own thoughs and background behind the project

The journey behind building this project was both challenging and enlightening. My motivation was rooted in improving my state management skills and challenging myself to work with React Redux and prop passing.

I initiated this project as an assignment from my mentor, who requested a Hangman game implementation. To infuse creativity, I chose a unique theme suitable for kids to practice Swedish and/or English words. This way, players with basic knowledge of these languages can enjoy the game.

Originally, I planned to utilize an open API to fetch random words, but due to rendering issues in the browser, I temporarily hardcoded words locally. This allowed me to lay the foundation for the project.

My initial UI concept involved animating clouds based on game progress. However, ensuring responsiveness and uniform behavior across devices proved more challenging than expected. Thus, I shifted to alternately adjusting cloud opacity based on correct guesses, gradually revealing the sun and rainbow behind the clouds upon winning.

Throughout development, I learned the significance of creative problem-solving and not getting stuck on a single solution. This project has been a rewarding experience, teaching me to approach challenges with flexibility and creativity.

Thank you for exploring the Hangman Game project! Your interest and support mean a lot.

Wiew the project live at: https://swedishweatherwords.netlify.app/

### Directory Structure

The project's directory structure is organized as follows:

```
src/
|-- components/
|   |-- HangmanGame.js
|   |-- WordDisplay.js
|   |-- GuessInput.js
|   |-- IncorrectGuesses.js
|   |-- CloudsAnimations.js
|-- App.js
|-- actions/
|   |-- gameActions.js
|-- reducers/
|   |-- gameReducer.js
|-- styles/
|   |-- GlobalStyles.js
|-- utils/
|   |-- api.js
|-- index.js
|-- store.js
|-- ...
```

### Components

1. **HangmanGame.js**: The main container for the game logic. This component manages the game's state, tracks incorrect guesses, and determines win/loss conditions.

2. **WordDisplay.js**: Displays the secret word as a sequence of blanks and revealed letters.

3. **GuessInput.js**: Offers an input field for players to guess a letter, and it handles the submission of guesses.

4. **IncorrectGuesses.js**: Displays the letters that have been guessed incorrectly.

5. **CloudsAnimations.js**: Handles animations for clouds, contributing to the visual appeal of the game's user interface.

6. **App.js**: The entry point that wraps the entire game, sets up global styles, routing, and other global functionalities.

### Actions and Reducers

1. **gameActions.js**: Defines action creators for game-related actions, such as making guesses and starting new games.

2. **gameReducer.js**: A reducer that manages state changes for the game based on dispatched actions.

### Styles

1. **GlobalStyles.js**: Defines global styles to ensure consistent margins, fonts, and other styles across the application.

### Utils

1. **api.js**: Stores the API key for the Wordnik API, which is intended for future use in the project.

### State Management with Redux

Efficient state management is achieved through Redux. Actions and reducers collaboratively handle state changes related to the game, promoting separation of game logic from presentation components for improved maintainability.

### Styled Components

Styled Components are used to manage component-specific styles. Each component has its own styled component definition, enhancing encapsulation of styles within each component.

