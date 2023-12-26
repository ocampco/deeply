import React from 'react';
import styles from './Badge.module.css';

const Badge = ({ children }) => (
  <div className={styles.badge}>{children}</div>
);

export default Badge;
