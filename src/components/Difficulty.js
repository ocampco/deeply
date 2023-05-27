import React from 'react';
import difficultyLevels from '../constants/difficultyLevels';

const DifficultyButton = ({
    onClick,
    id,
    displayName,
    description,
}) => (
    <button
        type="button"
        onClick={() => onClick(id)}
    >
        {displayName}
        {description}
    </button>
);

const Difficulty = ({ setDifficulty }) => (
    <>
        <h1>How deep would you like to go?</h1>
        { difficultyLevels.map(({ id, displayName, description }) => (
            <DifficultyButton
                key={id}
                onClick={setDifficulty}
                id={id}
                displayName={displayName}
                description={description}
            />
        ))}
    </>
);

export default Difficulty;
