import styled from 'styled-components';
import Category, { PlaceholderCategory } from './Category';
import categories from '../constants/categories';

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1rem;
  row-gap: 1rem;

  @media (min-width: 640px) {
      grid-auto-rows: 1fr;
      grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const TEXT_HEADING = 'how deep would you like to go?';

const CategoryContainer = () => (
  <>
    <h1>{TEXT_HEADING}</h1>
    <List>
      <PlaceholderCategory />
      { categories.map(({
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
    </List>
  </>
);

export default CategoryContainer;
