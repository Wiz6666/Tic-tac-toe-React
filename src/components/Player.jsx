import { useState } from 'react';

export default function Player({ name, symbol, isActive, onChangeName }) { // Add onChangeName prop
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        if (isEditing) {
            if (playerName.trim() === '') {
                setPlayerName(name);
            } else {
                onChangeName(playerName); // Call onChangeName with the new name
            }
        } else {
            setPlayerName('');
        }
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = isEditing ? (
        <input type="text" required value={playerName} onChange={handleChange} />
    ) : (
        <span className="player-name">{playerName}</span>
    );

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    );
}