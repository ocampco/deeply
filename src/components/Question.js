import styled from 'styled-components';
import Badge from './shared/Badge';

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

const Question = ({ question }) => (
  <>
    <StyledBadge secondary>deeply original</StyledBadge>
    <Heading>{question}</Heading>
  </>
);

export default Question;
