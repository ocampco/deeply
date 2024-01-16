import styled from 'styled-components';
import Badge from './shared/Badge';
import NextLink from './shared/NextLink';
import { PATH_CATEGORY } from '../constants/paths';

const Heading = styled.h1`
  animation: var(--default-animation);
  font-size: 10vh;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (orientation: landscape) {
    font-size: 16vh;
  }
`;

const Subheading = styled.h2`
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
    <Heading>{TEXT_HEADING}</Heading>
    <Subheading>{TEXT_SUBHEADING}</Subheading>
    <StyledBadge>{TEXT_BADGE}</StyledBadge>
    <StyledNextLink to={PATH_CATEGORY}>
      {TEXT_BUTTON}
    </StyledNextLink>
  </>
);

export default Home;
