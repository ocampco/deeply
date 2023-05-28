import Layout from '../components/Layout';
import Home from '../components/Home';
import Difficulty from '../components/Difficulty';
import Question from '../components/Question';

export const PATH_HOME = '/';
export const PATH_DIFFICULTY = '/difficulty';
export const PATH_QUESTION_SEGMENT = '/questions';
export const PATH_QUESTION = `${PATH_QUESTION_SEGMENT}/:difficulty`;

const ROUTES = [{
    path: PATH_HOME,
    element: <Layout><Home /></Layout>,
}, {
    path: PATH_DIFFICULTY,
    element: <Layout><Difficulty /></Layout>,
}, {
    path: PATH_QUESTION,
    element: <Layout isDark><Question /></Layout>,
}];

export default ROUTES;