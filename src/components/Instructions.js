import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PATH_DIFFICULTY, PATH_QUESTION_SEGMENT } from '../constants/paths';
import styles from './Instructions.module.css';

// TODO: Use shared component with styled-components
const DIFFICULTY_BUTTON_TEXT = '< change category';
const DifficultyButton = () => (
  <Link
    to={PATH_DIFFICULTY}
  >
      {DIFFICULTY_BUTTON_TEXT}
  </Link>
);

const Instructions = () => {
    const { state: { difficulty } } = useLocation();

    return (
        <>
          <DifficultyButton />
          <div className={styles.instructions}>
            <h1>before you start</h1>
            <ul className={styles.items}>
                <li className={styles.item}>
                    please take your time to think about each answer
                </li>
                <li className={styles.item}>
                    if you'd like to drink, raise a glass and say <span className={styles.emphasis}>"deep"</span> if the answer resonates with you
                </li>
            </ul>
          </div>
          <div className={styles.button}>
              <Link to={`${PATH_QUESTION_SEGMENT}/${difficulty}`}>
                  i'm ready
              </Link>
          </div>
        </>
    )
};

export default Instructions;
