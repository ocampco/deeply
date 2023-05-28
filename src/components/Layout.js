import React from 'react';
import styles from './Layout.module.css';

const Layout = ({ children }) => (
    <div className={styles.container}>
        <div className={styles.content}>
            { children }
        </div>
    </div>
);

export default Layout;
