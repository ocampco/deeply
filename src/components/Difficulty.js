import React from 'react';
import { Link } from 'react-router-dom';
import difficultyLevels from '../constants/difficultyLevels';
import { PATH_INSTRUCTIONS } from '../constants/routes';
import styles from './Difficulty.module.css';

// TODO: Add question path based on ID
const DifficultyLevel = ({
    url,
    displayName,
    description,
}) => (
    <li className={styles.level}>
        <Link
            to={PATH_INSTRUCTIONS}
            state={{ difficulty: url }}
        >
            <h2 className={styles.name}>{displayName}</h2>
            <p className={styles.description}>{description}</p>
        </Link>
    </li>
);

const Difficulty = () => (
    <>
        <h1 className={styles.heading}>
            how deep would you like to go?
        </h1>
        <ul className={styles.levels}>
        { difficultyLevels.map(({ url, displayName, description }) => (
            <DifficultyLevel
                key={url}
                url={url}
                displayName={displayName}
                description={description}
            />
        ))}
        </ul>
    </>
);

export default Difficulty;
