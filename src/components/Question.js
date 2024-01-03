import styled from 'styled-components';
import Badge from './shared/Badge';

const StyledBadge = styled(Badge)`
  margin-bottom: 1rem;
`;

const Heading = styled.h1`
  overflow-y: scroll;
  font-size: 5.5vh;
  line-height: var(--default-line-height);
  margin-bottom: 0;

  @media (orientation: landscape) {
    font-size: 4vw;
  }
`;

const Question = ({ question }) => (
  <>
    <StyledBadge secondary>deeply original</StyledBadge>
    <Heading>{question}</Heading>
  </>
);

export default Question;
