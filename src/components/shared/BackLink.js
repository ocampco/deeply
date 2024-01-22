import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BackArrowIcon } from './Icons';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

const BackLink = ({
  to,
  className,
  children,
}) => (
  <Container className={className}>
    <StyledLink to={to}>
      <BackArrowIcon />
      {children}
    </StyledLink>
  </Container>
);

export default BackLink;
