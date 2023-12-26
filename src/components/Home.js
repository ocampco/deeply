import React from 'react';
import { Link } from 'react-router-dom';
import Badge from './Badge';
import { PATH_DIFFICULTY } from '../constants/paths';
// TODO: Migrate all to styled components
import styles from './Home.module.css';

const TEXT_HEADING = 'deeply';
const TEXT_SUBHEADING = 'meaningful questions, better connections';
const TEXT_BADGE = 'early access';
const TEXT_BUTTON = 'start';

const Home = () => (
    <>
        <h1 className={styles.heading}>{TEXT_HEADING}</h1>
        <h2 className={styles.subheading}>{TEXT_SUBHEADING}</h2>
        <span className={styles.badge}>
          <Badge>{TEXT_BADGE}</Badge>
        </span>
        <div className={styles.link}>
          <Link to={PATH_DIFFICULTY}>
            {TEXT_BUTTON}
          </Link>
        </div>
    </>
);

export default Home;
