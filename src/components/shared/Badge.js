import styled from 'styled-components';

const Container = styled.div`
  width: fit-content;
  padding: 0.25rem 0.5rem;
  margin-bottom: 0.25rem;
  font-size: 1rem;
  color: ${ props => props.secondary ? 'var(--default-primary-brown)' : 'var(--default-primary-beige)'};
  background-color: ${ props => props.secondary ? 'var(--default-primary-beige)' : 'var(--default-primary-brown)'};
  border-radius: var(--default-border-radius);
  text-transform: uppercase;
`;

const Badge = ({ secondary, children }) => (
  <Container secondary={secondary}>{children}</Container>
);

export default Badge;
