import React from 'react';
import { Link } from 'react-router-dom';
import { PATH_DIFFICULTY } from '../constants/routes';
import styles from './Home.module.css';

const Home = () => (
    <>
        <h1 className={styles.heading}>
            deeply
        </h1>
        <h3 className={styles.subheading}>
            meaningful questions, better connections
        </h3>
        <Link to={PATH_DIFFICULTY}>
            <div className={styles.button}>
                start
            </div>
        </Link>
    </>
);

export default Home;
