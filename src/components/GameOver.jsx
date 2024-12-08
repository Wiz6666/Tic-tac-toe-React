export default function GameOver({ winner, onRestart }) { // Define GameOver component with winner and onRestart props
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner ? (
                <p>Winner is {winner}!</p> // Display winner if exists
            ) : (
                <p>It's a draw!</p> // Display draw message if no winner
            )}
            <button onClick={onRestart}>Retry</button>
        </div>
    );
}