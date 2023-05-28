import React from 'react';
import { Link } from 'react-router-dom';
import difficultyLevels from '../constants/difficultyLevels';
import styles from './Difficulty.module.css';

// TODO: Add question path based on ID
const DifficultyButton = ({
    onClick,
    id,
    displayName,
    description,
}) => (
    <Link onClick={() => onClick(id)}>
        <div className={styles.level}>
            <h3 className={styles.name}>{displayName}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    </Link>
);

const Difficulty = ({ setDifficulty }) => (
    <>
        <h2 className={styles.heading}>
            how deep would you like to go?
        </h2>
        <div className={styles.levels}>
        { difficultyLevels.map(({ id, displayName, description }) => (
            <DifficultyButton
            key={id}
            onClick={setDifficulty}
            id={id}
                displayName={displayName}
                description={description}
                />
        ))}
        </div>
    </>
);

export default Difficulty;
