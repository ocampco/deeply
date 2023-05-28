import React, { useState } from 'react';
import shuffle from 'lodash/shuffle';
import drop from 'lodash/drop';
import { useParams } from 'react-router-dom';
import fixture from '../fixture';
import styles from './Question.module.css';

// TODO: Pull from db
// TODO: Randomise questions
// TODO: Use Link component for routing
const Question = ({ question, onClick }) => (
    <>
        <div className={styles.question}>
            {question}
        </div>
        <button
            type='button'
            className={styles.button}
            onClick={onClick}
        >
            next question
        </button>
    </>
);

const getQuestions = (difficulty) => {
    const questions = fixture[difficulty];

    return shuffle(questions)
};

const setNextQuestion = (
    questionList,
    setQuestionList,
) => {
    const newQuestionList = drop(questionList);
    setQuestionList(newQuestionList);
}

const QuestionContainer = () => {
    const { difficulty } = useParams();
    const questions = getQuestions(difficulty);
    const [questionList, setQuestionList] = useState(questions);

    return (
        <Question
            question={questionList[0]}
            onClick={() => setNextQuestion(questionList, setQuestionList)}
        />
    )
}

export default QuestionContainer;
