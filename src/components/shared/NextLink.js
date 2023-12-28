import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RoundedContainer = styled.div`
  border-radius: var(--default-border-radius);
  width: fit-content;
  height: fit-content;
`;

const StyledContainer = styled(RoundedContainer)`
  background-color: var(--default-primary-white);
  box-shadow: var(--default-box-shadow);
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 700;
`;

const NextLink = ({ to, className, children }) => (
  <Link to={to} className={className}>
    <StyledContainer>
      {children}
    </StyledContainer>
  </Link>
);

export default NextLink;
