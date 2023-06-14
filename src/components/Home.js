import React from 'react';
import { Link } from 'react-router-dom';
import { PATH_DIFFICULTY } from '../constants/routeConfig';
import styles from './Home.module.css';

const Home = () => (
    <>
        <h1 className={styles.heading}>
            deeply
        </h1>
        <h2 className={styles.subheading}>
            meaningful questions, better connections
        </h2>
        <div className={styles.button}>
            <Link
                to={PATH_DIFFICULTY}
                className={styles.buttonText}
            >
                start
            </Link>
        </div>
    </>
);

export default Home;
