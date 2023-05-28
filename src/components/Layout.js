import React from 'react';
import styles from './Layout.module.css';

const Layout = ({ isDark, children }) => (
    <div className={ isDark ? styles.dark : styles.light}>
        <div className={styles.content}>
            { children }
        </div>
    </div>
);

export default Layout;
