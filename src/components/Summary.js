import React from 'react';
import { Link } from 'react-router-dom';
import {
    PATH_DONATE,
    PATH_DIFFICULTY,
} from '../constants/paths';
import styles from './Summary.module.css';

const Summary = () => (
    <>
        <h1>thanks for playing</h1>
        <div className={styles.actions}>
            <div className={styles.donate}>
                <h2 className={styles.title}>
                    did you like the game?
                </h2>
                <p className={styles.description}>
                    if you'd like to help me make this app better, you can
                </p>
                <a
                    href={PATH_DONATE}
                    title='buy me a coffee'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <p className={styles.link}>
                        buy me a coffee
                    </p>
                </a>
            </div>
            <div className={styles.restart}>
                <Link to={PATH_DIFFICULTY}>
                    try another
                </Link>
            </div>
        </div>
    </>
);

export default Summary;
