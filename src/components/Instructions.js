import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import BackLink from './shared/BackLink';
import Emoji from './shared/Emoji';
import Button from './shared/Button';
import { PATH_DIFFICULTY, PATH_QUESTION_SEGMENT } from '../constants/paths';
import styles from './Instructions.module.css';

const DIFFICULTY_BUTTON_TEXT = 'change category';

const StyledButton = styled(Button)`
  margin: 0 auto;
`;

const Instructions = () => {
    const { state: { difficulty } } = useLocation();

    return (
        <>
          <BackLink path={PATH_DIFFICULTY}>
            {DIFFICULTY_BUTTON_TEXT}
          </BackLink>
          <div className={styles.content}>
            <h1>before you start <Emoji label='raised hand'>✋</Emoji></h1>
            <ul>
                <li className={styles.item}>
                  please take your time to think about each answer
                </li>
                <li className={styles.item}>
                  if you'd like to drink, raise a glass and say "deep" if the answer resonates with you
                </li>
            </ul>
          </div>
          <StyledButton
            to={`${PATH_QUESTION_SEGMENT}/${difficulty}`}
            animate
          >
            i'm ready
          </StyledButton>
        </>
    )
};

export default Instructions;
