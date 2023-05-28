import React from 'react';
import { Link } from 'react-router-dom';
import { PATH_DIFFICULTY } from '../constants/routes';
import styles from './Home.module.css';

const Home = () => (
    <>
        <h1 className={styles.heading}>
            deeply
        </h1>
        <p className={styles.subheading}>
            meaningful questions, better connections
        </p>
        <Link to={PATH_DIFFICULTY}>
            <div className={styles.startButton}>
                start
            </div>
        </Link>
    </>
);

export default Home;
