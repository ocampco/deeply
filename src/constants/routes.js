import Layout from '../components/Layout';
import Home from '../components/Home';
import Difficulty from '../components/Difficulty';

export const PATH_HOME = '/';
export const PATH_DIFFICULTY = '/difficulty';

const ROUTES = [{
    path: PATH_HOME,
    element: <Layout><Home /></Layout>,
}, {
    path: PATH_DIFFICULTY,
    element: <Layout><Difficulty /></Layout>,
}];

export default ROUTES;