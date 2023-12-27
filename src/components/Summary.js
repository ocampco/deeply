import React from 'react';
import { Link } from 'react-router-dom';
import Emoji from './Emoji';
import { ExternalLink, RepeatArrow } from './Icons';
import {
    PATH_DONATE,
    PATH_DIFFICULTY,
} from '../constants/paths';
import styles from './Summary.module.css';

const TEXT_HEADING = 'thanks for playing';
const TEXT_SUBHEADING = 'did you like the game?';
const TEXT_DESCRIPTION = 'if you\'d like to help me make this app better, you can';
const TEXT_LINK = 'buy me a coffee';
const TEXT_BUTTON = 'try another';

const Summary = () => (
    <>
        <div className={styles.actions}>
          <h1>
            {TEXT_HEADING} <Emoji label='party popper'>🎉</Emoji>
          </h1>
          <h2 className={styles.subheading}>
            {TEXT_SUBHEADING}
          </h2>
          <p className={styles.description}>
            {TEXT_DESCRIPTION}
          </p>
          <a
              href={PATH_DONATE}
              title={TEXT_LINK}
              target='_blank'
              rel='noopener noreferrer'
          >
            <p className={styles.link}>
              <ExternalLink />
              {TEXT_LINK}
            </p>
          </a>
        </div>
        <div className={styles.restart}>
          <Link to={`${PATH_DIFFICULTY}`}>
            {TEXT_BUTTON}
            <RepeatArrow />
          </Link>
        </div>
    </>
);

export default Summary;
