import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RoundedButton = styled.div`
  border-radius: var(--default-border-radius);
  width: fit-content;
  height: fit-content;
`;

const StyledButton = styled(RoundedButton)`
  background-color: var(--default-primary-white);
  box-shadow: var(--default-box-shadow);
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 700;
`;

const Button = ({ className, to, children }) => (
  <Link className={className} to={to}>
    <StyledButton>
      {children}
    </StyledButton>
  </Link>
);

export default Button;
