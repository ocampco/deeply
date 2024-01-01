import shuffle from 'lodash/shuffle';
import slice from 'lodash/slice';
import fixture from './../fixture';

const MAX_QUESTIONS = 6;

// TODO: Migrate logic to API
const fetchQuestions = (category, questionList = fixture) => {
  const questions = questionList[category];
  const shuffledQuestions = shuffle(questions);

  return slice(shuffledQuestions, 0, MAX_QUESTIONS);
};

export default fetchQuestions;
