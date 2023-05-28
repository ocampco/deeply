import React from 'react';
import { useParams } from 'react-router-dom';
import fixture from '../fixture';
import styles from './Question.module.css';

// TODO: Pull from db
// TODO: Randomise questions
// TODO: Use Link component for routing
const Question = () => {
    const { difficulty } = useParams();
    const questions = fixture[difficulty]; 

    return (
        <>
            <div className={styles.question}>
                {questions[0]}
            </div>
            <button
                type='button'
                className={styles.button}
            >
                next question
            </button>
        </>
    )
};

export default Question;
