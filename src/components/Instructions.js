import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PATH_QUESTION_SEGMENT } from '../constants/paths';
import styles from './Instructions.module.css';

const Instructions = () => {
    const { state: { difficulty } } = useLocation();

    return (
        <>
            <h1>before you start</h1>
            <ul className={styles.items}>
                <li className={styles.item}>
                    please take your time to think about each answer
                </li>
                <li className={styles.item}>
                    if you'd like to drink, raise a glass and say <span className={styles.emphasis}>"deep"</span> if the answer resonates with you
                </li>
            </ul>
            <div className={styles.button}>
                <Link to={`${PATH_QUESTION_SEGMENT}/${difficulty}`}>
                    i'm ready
                </Link>
            </div>
        </>
    )
};

export default Instructions;
