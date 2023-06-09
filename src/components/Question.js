import React, { useState } from 'react';
import shuffle from 'lodash/shuffle';
import drop from 'lodash/drop';
import { Link, useParams } from 'react-router-dom';
import fixture from '../fixture';
import { PATH_SUMMARY } from '../constants/paths';
import styles from './Question.module.css';

const QUESTION_BUTTON_TEXT = 'next question';

// TODO: Use Link component for routing
// TODO: Pull from db
const QuestionButton = ({ clickFn }) => (
    <button
        type='button'
        className={styles.button}
        onClick={clickFn}
    >
        {QUESTION_BUTTON_TEXT}
    </button>
);

const SummaryButton = () => (
    <div className={styles.button}>
        <Link to={PATH_SUMMARY}>
            {QUESTION_BUTTON_TEXT}
        </Link>
    </div>
);

const getShuffledQuestions = (questionList, difficulty) => {
    const questions = questionList[difficulty];

    return shuffle(questions);
}

const updateQuestionList = (
    questionList,
    setQuestionList,
) => {
    const newQuestionList = drop(questionList);
    setQuestionList(newQuestionList);
}

const Question = () => {
    const { difficulty } = useParams();
    const questions = getShuffledQuestions(fixture, difficulty);
    const [questionList, setQuestionList] = useState(questions);
    const hasQuestions = questionList.length > 1;

    return (
        <>
            <h1 className={styles.question}>{questionList[0]}</h1>
            { hasQuestions
                ? <QuestionButton clickFn={() => updateQuestionList(questionList, setQuestionList)} />
                : <SummaryButton />
            }

        </>
    )
}

export default Question;
