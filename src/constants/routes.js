import Layout from '../components/Layout';
import Home from '../components/Home';
import Difficulty from '../components/Difficulty';
import Instructions from '../components/Instructions';
import Question from '../components/Question';
import Summary from '../components/Summary';

export const PATH_DIFFICULTY = '/difficulty';
export const PATH_INSTRUCTIONS = '/instructions';
export const PATH_QUESTION_SEGMENT = '/questions';
export const PATH_SUMMARY = '/summary';
export const PATH_DONATE = 'https://www.buymeacoffee.com/ocampco';

const PATH_HOME = '/';
const PATH_QUESTION = `${PATH_QUESTION_SEGMENT}/:difficulty`;

const ROUTES = [{
    path: PATH_HOME,
    element: <Layout><Home /></Layout>,
}, {
    path: PATH_DIFFICULTY,
    element: <Layout><Difficulty /></Layout>,
}, {
    path: PATH_INSTRUCTIONS,
    element: <Layout><Instructions /></Layout>,
}, {
    path: PATH_QUESTION,
    element: <Layout isDark><Question /></Layout>,
}, {
    path: PATH_SUMMARY,
    element: <Layout><Summary /></Layout>,
}];

export default ROUTES;