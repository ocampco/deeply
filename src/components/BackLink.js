import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const BackArrow = styled(IoIosArrowBack)`
  margin-right: 0.25rem;
  vertical-align: middle;
  color: ${props => props.secondary ? 'var(--default-primary-beige)' : 'inherit'}
`;

const Text = styled(Link)`
  color: ${props => props.secondary ? 'var(--default-primary-beige)' : 'inherit'}
`;

const BackLink = ({
  path,
  text,
}) => (
  <Container>
    <BackArrow />
    <Text to={path}>
      {text}
    </Text>
  </Container>
);

export default BackLink;
