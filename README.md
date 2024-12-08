# React Tic-Tac-Toe

## Description

React Tic-Tac-Toe is a simple implementation of the classic Tic-Tac-Toe game using React. It allows two players to take turns marking spaces in a 3x3 grid. The game ends when one player aligns three of their symbols in a row, column, or diagonal, or when all spaces are filled resulting in a draw. The application features a user-friendly interface with options to edit player names and restart the game.

## Features

- **Two-Player Mode**: Players X and O take turns to play.
- **Editable Player Names**: Players can edit and save their names.
- **Win Detection**: The game detects and announces the winner.
- **Draw Detection**: The game recognizes a draw when all spaces are filled without a winner.
- **Game Reset**: A "Retry" button allows players to restart the game.
- **Interactive UI**: Responsive design with visual feedback for active players.

## Components

- **App.jsx**: Manages game state, player turns, and renders other components.
- **Player.jsx**: Displays player information and allows name editing.
- **Gameboard.jsx**: Renders the Tic-Tac-Toe grid and handles player moves.
- **GameOver.jsx**: Displays the game result and provides a reset option.
- **Log.jsx**: Shows a log of moves made during the game.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-tic-tac-toe.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-tic-tac-toe
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and go to `http://localhost:5173` to play the game.

## Future Enhancements

- Implement a scoring system to track wins across multiple games.
- Add AI for single-player mode.
- Allow customization of the board size.
- Enhance UI with animations and sound effects.

## License

This project is licensed under the MIT License.
