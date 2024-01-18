import { useState } from 'react';
import styled from 'styled-components';
import drop from 'lodash/drop';
import { useParams } from 'react-router-dom';
import BackLink from './shared/BackLink';
import Question from './Question';
import NextLink from './shared/NextLink';
import fetchQuestion from './../services/mockService';
import { ForwardArrow } from './shared/Icons';
import { PATH_CATEGORY, PATH_SUMMARY } from '../constants/paths';

const BUTTON_TEXT_BACK = 'change category';
const BUTTON_TEXT_NEXT = 'next question';
const BUTTON_TEXT_END = 'finish';

// TODO: Use Link component for routing
const Button = styled.button`
  border: none;
  color: var(--default-primary-brown);
  align-self: flex-end;
  border-radius: var(--default-border-radius);
  box-shadow: var(--default-box-shadow);
  padding: 1rem 2rem;
  font-weight: 700;
`;

const QuestionButton = ({ clickFn }) => (
  <Button
    type='button'
    onClick={clickFn}
  >
    {BUTTON_TEXT_NEXT}
    <ForwardArrow />
  </Button>
);

const StyledBackLink = styled(BackLink)`
  margin-bottom: 2rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
  }

  @media (min-width: 668px) {
    margin-bottom: 3rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  // TODO: Use less hacky solution
  // https://stackoverflow.com/questions/75368940/in-container-with-flex-grow-1-the-content-is-overflowing-when-it-should-be-scro
  height: 1px;
  margin-bottom: 2rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
  }

  @media (min-width: 668px) {
    margin-bottom: 3rem;
  }
`;

const StyledNextLink = styled(NextLink)`
  align-self: flex-end;
`;

const updateQuestionList = (
  questionList,
  setQuestionList,
) => {
  const newQuestionList = drop(questionList);
  setQuestionList(newQuestionList);
};

const QuestionContainer = () => {
  const { category } = useParams();
  const questions = fetchQuestion(category);
  const [questionList, setQuestionList] = useState(questions);
  const hasQuestions = questionList.length > 1;

  return (
    <>
      <StyledBackLink to={PATH_CATEGORY}>
        {BUTTON_TEXT_BACK}
      </StyledBackLink>
      <Content>
        <Question question={questionList[0].question} />
      </Content>
      { hasQuestions
        ? <QuestionButton clickFn={() => updateQuestionList(questionList, setQuestionList)} />
        : <StyledNextLink to={PATH_SUMMARY}>{BUTTON_TEXT_END}<ForwardArrow /></StyledNextLink>
      }
    </>
  );
};

export default QuestionContainer;
