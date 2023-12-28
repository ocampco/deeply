import styled from 'styled-components';
import Badge from './shared/Badge';
import Button from './shared/Button';
import { PATH_DIFFICULTY } from '../constants/paths';
// TODO: Migrate all to styled components
import styles from './Home.module.css';

const TEXT_HEADING = 'deeply';
const TEXT_SUBHEADING = 'meaningful questions, better connections';
const TEXT_BADGE = 'early access';
const TEXT_BUTTON = 'start';

const StyledButton = styled(Button)`
  margin: 0 auto;
  animation: var(--default-animation);
`;

const Home = () => (
    <>
        <h1 className={styles.heading}>{TEXT_HEADING}</h1>
        <h2 className={styles.subheading}>{TEXT_SUBHEADING}</h2>
        <span className={styles.badge}>
          <Badge>{TEXT_BADGE}</Badge>
        </span>
        <StyledButton to={PATH_DIFFICULTY}>
          {TEXT_BUTTON}
        </StyledButton>
    </>
);

export default Home;
