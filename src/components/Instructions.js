import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import BackLink from './BackLink';
import { PATH_DIFFICULTY, PATH_QUESTION_SEGMENT } from '../constants/paths';
import styles from './Instructions.module.css';

const DIFFICULTY_BUTTON_TEXT = 'change category';

const Instructions = () => {
    const { state: { difficulty } } = useLocation();

    return (
        <>
          <BackLink path={PATH_DIFFICULTY}>
            {DIFFICULTY_BUTTON_TEXT}
          </BackLink>
          <div className={styles.content}>
            <h1>before you start</h1>
            <ul>
                <li className={styles.item}>
                  please take your time to think about each answer
                </li>
                <li className={styles.item}>
                  if you'd like to drink, raise a glass and say "deep" if the answer resonates with you
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
