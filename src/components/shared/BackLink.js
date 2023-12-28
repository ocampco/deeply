import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BackArrow } from './Icons';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled(Link)`
  color: inherit;
`;

const BackLink = ({
  path,
  children,
}) => (
  <Container>
    <BackArrow />
    <Text to={path}>
      {children}
    </Text>
  </Container>
);

export default BackLink;
