import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BackArrow } from './Icons';

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
  <StyledLink to={to}>
    <Container className={className}>
      <BackArrow />
        {children}
    </Container>
  </StyledLink>
);

export default BackLink;
