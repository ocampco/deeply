import Emoji from './shared/Emoji';
import Category from './Category';
import difficultyLevels from '../constants/difficultyLevels';
import styles from './CategoryContainer.module.css';

// TODO: Clean up
const PlaceholderDifficultyLevel = () => (
  <li className={styles.placeholderLevel}>
    <h2 className={styles.name}>
      user submitted - coming soon <Emoji label='construction'>🚧</Emoji>
    </h2>
  </li>
);

const CategoryContainer = () => (
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
            <Category
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

export default CategoryContainer;
