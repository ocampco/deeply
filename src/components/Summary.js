import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from './Icons';
import {
    PATH_DONATE,
    PATH_DIFFICULTY,
} from '../constants/paths';
import { QUERY_SHOW_PWA } from '../constants/queries';
import styles from './Summary.module.css';

const Summary = () => (
    <>
        <div className={styles.actions}>
          <h1>
            thanks for playing
          </h1>
          <h2 className={styles.title}>
            did you like the game?
          </h2>
          <p className={styles.description}>
            if you'd like to help me make this app better, you can
          </p>
          <a
              href={PATH_DONATE}
              title='buy me a coffee'
              target='_blank'
              rel='noopener noreferrer'
          >
            <p className={styles.link}>
              <ExternalLink />
              buy me a coffee
            </p>
          </a>
        </div>
        <div className={styles.restart}>
          <Link to={`${PATH_DIFFICULTY}?${QUERY_SHOW_PWA}`}>
            try another
          </Link>
        </div>
    </>
);

export default Summary;
