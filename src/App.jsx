import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import Log from "./components/Log";
import { useState, useEffect } from "react";
import { WINNING_COMBINATIONS } from "./winning-combination";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns) {
  return gameTurns.length % 2 === 0 ? 'X' : 'O'; // Determine active player based on turn count
}

function App() {
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2',
  });

  const [gameTurns, setGameTurns] = useState([]); // Manage game turns state
  const [winner, setWinner] = useState(null); // Manage winner state
  const [gameBoard, setGameBoard] = useState(initialGameBoard); // Manage game board state

  const activePlayer = deriveActivePlayer(gameTurns); // Get active player

  useEffect(() => {
    const newBoard = [...initialGameBoard.map(array => [...array])]; // Deep copy of initial game board
    for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;
      newBoard[row][col] = player; // Update board with player moves
    }
    setGameBoard(newBoard);

    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (
        newBoard[a.row][a.column] &&
        newBoard[a.row][a.column] === newBoard[b.row][b.column] &&
        newBoard[a.row][a.column] === newBoard[c.row][c.column]
      ) {
        setWinner(newBoard[a.row][a.column]); // Set winner if combination matches
        return;
      }
    }
  }, [gameTurns]);

  const hasDraw = gameTurns.length === 9 && !winner; // Check for draw

  function handleSelectSquare(rowIndex, colIndex) {
    if (gameBoard[rowIndex][colIndex] || winner) return; // Prevent move if square is taken or game is over

    setGameTurns((prevTurns) => [
      { square: { row: rowIndex, col: colIndex }, player: activePlayer },
      ...prevTurns,
    ]); // Add new turn
  }

  function handleRestart() {
    setGameTurns([]); // Reset game turns
    setWinner(null); // Reset winner
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [symbol]: newName
    })); // Update player name
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
        <Player
  name={players.X}
  symbol="X"
  isActive={activePlayer === 'X'}
  onChangeName={(newName) => handlePlayerNameChange('X', newName)}
/>
<Player
  name={players.O}
  symbol="O"
  isActive={activePlayer === 'O'}
  onChangeName={(newName) => handlePlayerNameChange('O', newName)}
/>
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <Gameboard
          onSelectSquare={handleSelectSquare}
          board={gameBoard}
          turns={gameTurns}
          activePlayerSymbol={activePlayer}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;