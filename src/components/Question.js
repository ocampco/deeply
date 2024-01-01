import { useState } from 'react';
import styled from 'styled-components';
import drop from 'lodash/drop';
import { useParams } from 'react-router-dom';
import BackLink from './shared/BackLink';
import Badge from './shared/Badge';
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

const StyledBadge = styled(Badge)`
  margin-bottom: 1rem;
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

const updateQuestionList = (
    questionList,
    setQuestionList,
) => {
    const newQuestionList = drop(questionList);
    setQuestionList(newQuestionList);
};

const Question = () => {
    const { category } = useParams();
    const questions = fetchQuestion(category);
    const [questionList, setQuestionList] = useState(questions);
    const hasQuestions = questionList.length > 1;

    return (
        <>
          <BackLink path={PATH_CATEGORY}>
            {BUTTON_TEXT_BACK}
          </BackLink>
          <Content>
            <StyledBadge secondary>deeply original</StyledBadge>
            <Heading>{questionList[0].question}</Heading>
          </Content>
          { hasQuestions
              ? <QuestionButton clickFn={() => updateQuestionList(questionList, setQuestionList)} />
              : <StyledNextLink to={PATH_SUMMARY}>{BUTTON_TEXT_END}<ForwardArrow /></StyledNextLink>
          }
        </>
    )
}

export default Question;
