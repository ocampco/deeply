import styled from 'styled-components';
import Badge from './shared/Badge';
import NextLink from './shared/NextLink';
import { PATH_DIFFICULTY } from '../constants/paths';

const StyledHeading = styled.h1`
  animation: var(--default-animation);
  font-size: 5.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 420px) {
      font-size: 7rem;
  }
`;

const StyledSubheading = styled.h2`
  animation: var(--default-animation);
  margin-bottom: 1rem;
  text-align: center;
`;

const StyledBadge = styled(Badge)`
  animation: var(--default-animation);
  align-self: center;
  margin-bottom: 2.5rem;
`

const StyledNextLink = styled(NextLink)`
  animation: var(--default-animation);
  margin: 0 auto;
`;

const TEXT_HEADING = 'deeply';
const TEXT_SUBHEADING = 'meaningful questions, better connections';
const TEXT_BADGE = 'early access';
const TEXT_BUTTON = 'start';

const Home = () => (
  <>
    <StyledHeading>{TEXT_HEADING}</StyledHeading>
    <StyledSubheading>{TEXT_SUBHEADING}</StyledSubheading>
    <StyledBadge>{TEXT_BADGE}</StyledBadge>
    <StyledNextLink to={PATH_DIFFICULTY}>
      {TEXT_BUTTON}
    </StyledNextLink>
  </>
);

export default Home;
