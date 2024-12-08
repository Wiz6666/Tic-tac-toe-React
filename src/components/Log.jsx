export default function Log({ turns }) { // Define Log component with turns prop
    return (
        <ol id="log"> {/* Render log as ordered list */}
            {turns.map((turn, index) => // Map over each turn
                <li key={`${turn.square.row}${turn.square.col}${index}`}> {/* Unique key for each log entry */}
                    {turn.player} selected square {turn.square.row}, {turn.square.col} {/* Display turn details */}
                </li>
            )}
        </ol>
    );
}