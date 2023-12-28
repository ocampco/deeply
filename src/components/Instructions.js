import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import BackLink from './shared/BackLink';
import Emoji from './shared/Emoji';
import Button from './shared/Button';
import { PATH_DIFFICULTY, PATH_QUESTION_SEGMENT } from '../constants/paths';

const StyledContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
`;

const StyledItem = styled.li`
  line-height: var(--default-line-height);
  list-style: inside;
  list-style-position: outside;
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StyledButton = styled(Button)`
  animation: var(--default-animation);
  margin: 0 auto;
`;

const TEXT_BUTTON_BACK = 'change category';
const TEXT_BUTTON_NEXT = 'i\'m ready';
const TEXT_HEADING = 'before you start ';
const TEXT_ITEM_1 = 'please take your time to think about each answer';
const TEXT_ITEM_2 = 'if you\'d like to drink, raise a glass and say "deep" if the answer resonates with you';

const Instructions = () => {
    const { state: { difficulty } } = useLocation();

    return (
        <>
          <BackLink path={PATH_DIFFICULTY}>
            {TEXT_BUTTON_BACK}
          </BackLink>
          <StyledContent>
            <h1>
              {TEXT_HEADING}
              <Emoji label='raised hand'>✋</Emoji>
            </h1>
            <ul>
              <StyledItem>{TEXT_ITEM_1}</StyledItem>
              <StyledItem>{TEXT_ITEM_2}</StyledItem>
            </ul>
          </StyledContent>
          <StyledButton to={`${PATH_QUESTION_SEGMENT}/${difficulty}`}>
            {TEXT_BUTTON_NEXT}
          </StyledButton>
        </>
    )
};

export default Instructions;
