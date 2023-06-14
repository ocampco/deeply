import React from 'react';
import { Link } from 'react-router-dom';
import {
    PATH_DONATE,
    PATH_DIFFICULTY,
} from '../constants/routeConfig';
import styles from './Summary.module.css';

const Summary = () => (
    <>
        <h1 className={styles.heading}>
            thanks for playing
        </h1>
        <div className={styles.buttons}>
            <div className={styles.donate}>
                <a
                    href={PATH_DONATE}
                    title='buy me a coffee'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <h2 className={styles.title}>
                        did you like the game?
                    </h2>
                    <p className={styles.description}>
                        if you'd like to help me make this app better, you can <span className={styles.underline}>buy me a coffee</span>
                    </p>
                </a>
            </div>
            <div className={styles.restart}>
                <Link to={PATH_DIFFICULTY}>
                    <h2 className={styles.buttonText}>
                        try another
                    </h2>
                </Link>
            </div>
        </div>
    </>
);

export default Summary;
