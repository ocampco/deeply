import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import styles from './BackLink.module.css';

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
  <div className={styles.container}>
    <BackArrow />
    <Text to={path}>
      {text}
    </Text>
  </div>
);

export default BackLink;
