import { PATH_GITHUB } from '../constants/paths';

const fetchLastUpdated = async () => {
  try {
    const response = await fetch(PATH_GITHUB);
    const json = await response.json();

    return json.commit.author.date;
  } catch (error) {
    console.log('Failed to fetch', error);
  }
};

export default fetchLastUpdated;
