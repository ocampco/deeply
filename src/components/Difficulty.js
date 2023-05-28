import React from 'react';
import { Link } from 'react-router-dom';
import difficultyLevels from '../constants/difficultyLevels';
import styles from './Difficulty.module.css';

// TODO: Add question path based on ID
const DifficultyLevel = ({
    onClick,
    id,
    displayName,
    description,
}) => (
    <li className={styles.level}>
        <Link onClick={() => onClick(id)}>
            <h2 className={styles.name}>{displayName}</h2>
            <p className={styles.description}>{description}</p>
        </Link>
    </li>
);

const Difficulty = ({ setDifficulty }) => (
    <>
        <h1 className={styles.heading}>
            how deep would you like to go?
        </h1>
        <ul className={styles.levels}>
        { difficultyLevels.map(({ id, displayName, description }) => (
            <DifficultyLevel
                key={id}
                onClick={setDifficulty}
                id={id}
                displayName={displayName}
                description={description}
            />
        ))}
        </ul>
    </>
);

export default Difficulty;
