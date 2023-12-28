import { useState } from 'react';
import shuffle from 'lodash/shuffle';
import drop from 'lodash/drop';
import slice from 'lodash/slice';
import { Link, useParams } from 'react-router-dom';
import BackLink from './shared/BackLink';
import Badge from './shared/Badge';
import { ForwardArrow } from './shared/Icons';
import { PATH_DIFFICULTY, PATH_SUMMARY } from '../constants/paths';
import fixture from '../fixture';
import styles from './Question.module.css';

const BUTTON_TEXT_DIFFICULTY = 'change category';
const BUTTON_TEXT_NEXT = 'next question';
const BUTTON_TEXT_END = 'finish';
const MAX_QUESTIONS = 5;

// TODO: Use Link component for routing
// TODO: Pull from db
const QuestionButton = ({ clickFn }) => (
    <button
        type='button'
        className={styles.button}
        onClick={clickFn}
    >
      {BUTTON_TEXT_NEXT}
      <ForwardArrow />
    </button>
);

const SummaryButton = () => (
    <div className={styles.button}>
      <Link to={PATH_SUMMARY}>
        {BUTTON_TEXT_END}
        <ForwardArrow />
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

// TODO: Migrate logic to API
const Question = () => {
    const { difficulty } = useParams();
    const shuffledQuestions = getShuffledQuestions(fixture, difficulty);
    const questions = slice(shuffledQuestions, 0, MAX_QUESTIONS);
    const [questionList, setQuestionList] = useState(questions);
    const hasQuestions = questionList.length > 1;

    return (
        <>
          <BackLink path={PATH_DIFFICULTY}>
            {BUTTON_TEXT_DIFFICULTY}
          </BackLink>
          <div className={styles.content}>
            <Badge secondary>deeply original</Badge>
            <h1 className={styles.question}>{questionList[0]}</h1>
          </div>
          { hasQuestions
              ? <QuestionButton clickFn={() => updateQuestionList(questionList, setQuestionList)} />
              : <SummaryButton />
          }
        </>
    )
}

export default Question;
