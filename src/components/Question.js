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
import { PATH_CATEGORY, PATH_SUMMARY } from '../constants/paths';
import fixture from '../fixture';

const BUTTON_TEXT_BACK = 'change category';
const BUTTON_TEXT_NEXT = 'next question';
const BUTTON_TEXT_END = 'finish';
const MAX_QUESTIONS = 6;

// TODO: Use Link component for routing
// TODO: Migrate logic to API

const Button = styled.button`
  border: none;
  color: var(--default-primary-brown);
  align-self: flex-end;
  border-radius: var(--default-border-radius);
  box-shadow: var(--default-box-shadow);
  padding: 1rem 2rem;
  font-size: 1.125rem;
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

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h1`
  max-height: 55vh;
  overflow: scroll;
  font-size: 2rem;
  line-height: var(--default-line-height);
  margin-bottom: 0;
`;

const StyledNextLink = styled(NextLink)`
  align-self: flex-end;
`;

const getShuffledQuestions = (questionList, category) => {
    const questions = questionList[category];

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
    const { category } = useParams();
    const shuffledQuestions = getShuffledQuestions(fixture, category);
    const questions = slice(shuffledQuestions, 0, MAX_QUESTIONS);
    const [questionList, setQuestionList] = useState(questions);
    const hasQuestions = questionList.length > 1;

    return (
        <>
          <BackLink path={PATH_CATEGORY}>
            {BUTTON_TEXT_BACK}
          </BackLink>
          <Content>
            <Badge secondary>deeply original</Badge>
            <Heading>{questionList[0]}</Heading>
          </Content>
          { hasQuestions
              ? <QuestionButton clickFn={() => updateQuestionList(questionList, setQuestionList)} />
              : <StyledNextLink to={PATH_SUMMARY}>{BUTTON_TEXT_END}<ForwardArrow /></StyledNextLink>
          }
        </>
    )
}

export default Question;
