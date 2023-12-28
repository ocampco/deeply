import { useState } from 'react';
import styled from 'styled-components';
import shuffle from 'lodash/shuffle';
import drop from 'lodash/drop';
import slice from 'lodash/slice';
import { useParams } from 'react-router-dom';
import BackLink from './shared/BackLink';
import Badge from './shared/Badge';
import NextLink from './shared/NextLink';
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

const StyledContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
`;

const StyledQuestion = styled.h1`
  max-height: 25rem;
  overflow: scroll;
  font-size: 2rem;
  line-height: var(--default-line-height);
  margin-bottom: 0;
`;

const StyledNextLink = styled(NextLink)`
  align-self: flex-end;
`;

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
          <StyledContent>
            <Badge secondary>deeply original</Badge>
            <StyledQuestion>{questionList[0]}</StyledQuestion>
          </StyledContent>
          { hasQuestions
              ? <QuestionButton clickFn={() => updateQuestionList(questionList, setQuestionList)} />
              : <StyledNextLink to={PATH_SUMMARY}>{BUTTON_TEXT_END}<ForwardArrow /></StyledNextLink>
          }
        </>
    )
}

export default Question;
