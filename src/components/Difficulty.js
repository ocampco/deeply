import { Link } from 'react-router-dom';
import Emoji from './shared/Emoji';
import difficultyLevels from '../constants/difficultyLevels';
import { PATH_INSTRUCTIONS } from '../constants/paths';
import styles from './Difficulty.module.css';

// TODO: Clean up
const PlaceholderDifficultyLevel = () => (
  <li className={styles.placeholderLevel}>
    <h2 className={styles.name}>
      user submitted - coming soon <Emoji label='construction'>🚧</Emoji>
    </h2>
  </li>
);

// TODO: Add question path based on ID
const DifficultyLevel = ({
    url,
    displayName,
    emoji: {
      icon,
      label,
    },
    description,
}) => (
    <li className={styles.level}>
        <Link
            to={PATH_INSTRUCTIONS}
            state={{ difficulty: url }}
        >
            <h2 className={styles.name}>
              {displayName} <Emoji label={label}>{icon}</Emoji>
            </h2>
            <p className={styles.description}>{description}</p>
        </Link>
    </li>
);

const Difficulty = () => (
    <>
        <h1>how deep would you like to go?</h1>
        <ul className={styles.levels}>
          <PlaceholderDifficultyLevel />
          { difficultyLevels.map(({
            url,
            displayName,
            emoji,
            description,
          }) => (
            <DifficultyLevel
                key={url}
                url={url}
                displayName={displayName}
                emoji={emoji}
                description={description}
            />
          ))}
        </ul>
    </>
);

export default Difficulty;
