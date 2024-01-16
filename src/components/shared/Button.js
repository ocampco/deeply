import styled from 'styled-components';

const Container = styled.div`
  border-radius: var(--default-border-radius);
  width: fit-content;
  height: fit-content;
  background-color: var(--default-primary-white);
  box-shadow: var(--default-box-shadow);
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 700;
`;

const Button = ({ className, children }) => (
  <Container className={className}>
    {children}
  </Container>
);

export default Button;
