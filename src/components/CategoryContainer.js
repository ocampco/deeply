import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Category from './Category';
import Button from './shared/Button';
import ExternalLink from './shared/ExternalLink';
import { Add } from './shared/Icons';
import fetchLastUpdated from '../services/githubService';
import categories from '../constants/categories';
import { PATH_ADD_QUESTION } from '../constants/paths';

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

const Date = styled.p`
  text-transform: lowercase;
  margin-bottom: 2rem;
`;

const StyledButton = styled(Button)`
  font-weight: 400;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
`;

const TEXT_HEADING = 'how deep would you like to go?';
const TEXT_DATE = 'last update:';
const TEXT_ADD_QUESTION = 'suggest question';

// TODO: Migrate logic to API
const transformDate = (dateString) => {
  dayjs.extend(relativeTime)

  return dayjs(dateString).fromNow();
};

const CategoryContainer = () => {
  const [updateDate, setUpdateDate] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const dateString = await fetchLastUpdated();
      const transformedDate = transformDate(dateString);

      setUpdateDate(transformedDate);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>{TEXT_HEADING}</h1>
      <Date>{TEXT_DATE} {updateDate}</Date>
      <ExternalLink
        to={PATH_ADD_QUESTION}
        title={TEXT_ADD_QUESTION}
      >
        <StyledButton secondary>
          <Add />{TEXT_ADD_QUESTION}
        </StyledButton>
      </ExternalLink>
      <List>
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
};

export default CategoryContainer;
