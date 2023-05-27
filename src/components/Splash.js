import React, { useState, useEffect } from 'react';
import styles from './Splash.module.css';

const SplashContainer = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(
        () => { setTimeout(() => setIsVisible(false), '2500'); },
        [],
    );

    return (isVisible && children)
};

const Splash = () => (
    <>
        <h1 className={styles.heading}>
            deeply
        </h1>
        <p className={styles.subheading}>
            meaningful questions, better connections
        </p>
    </>
);

// export default SplashContainer;
export default () => (
    <SplashContainer><Splash /></SplashContainer>
);
