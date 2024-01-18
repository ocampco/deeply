import styled from 'styled-components';

const Container = styled.div`
  border-radius: var(--default-border-radius);
  width: fit-content;
  height: fit-content;
  background-color: ${props => props.secondary
    ? 'var(--default-primary-brown)'
    : 'var(--default-primary-white)'
  };
  color: ${props => props.secondary
    ? 'var(--default-primary-beige)'
    : 'var(--default-primary-brown)'
  };
  box-shadow: var(--default-box-shadow);
  padding: 1rem 2rem;
  font-weight: 700;
`;

const Button = ({
  className,
  secondary,
  children,
}) => (
  <Container
    className={className}
    secondary={secondary}
  >
    {children}
  </Container>
);

export default Button;
