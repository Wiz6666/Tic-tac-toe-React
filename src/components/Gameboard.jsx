import { useState } from 'react'; // Import useState hook from React

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export default function Gameboard({ onSelectSquare, activePlayerSymbol, board }) { // Define Gameboard component with props
    const [gameBoard, setGameBoard] = useState(initialGameBoard); // Manage game board state

    function handleSelectSquare(rowIndex, colIndex) { // Handle square selection
        setGameBoard((prevGameBoard) => { // Update game board state
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; // Deep copy of game board
            if (!updatedBoard[rowIndex][colIndex]) { // Update only if square is empty
                updatedBoard[rowIndex][colIndex] = activePlayerSymbol; // Set current player's symbol
                console.log(`Player ${activePlayerSymbol} selected square [${rowIndex}, ${colIndex}]`); // Log action
                onSelectSquare(rowIndex, colIndex); // Call onSelectSquare with coordinates
            }
            return updatedBoard; // Return updated board
        });
    }

    return (
        <ol id="game-board"> {/* Render game board as ordered list */}
            {board.map((row, rowIndex) => ( // Map over each row
                <li key={rowIndex}> {/* List item for each row */}
                    <ol>
                        {row.map((playerSymbol, colIndex) => ( // Map over each square
                            <li key={colIndex}> {/* List item for each square */}
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}
                                disable={playerSymbol !== null}> {/* Button for each square */}
                                    {playerSymbol} {/* Display player symbol */}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}