import App from '../App';
import Difficulty from '../components/Difficulty';

export const PATH_APP = '/';
export const PATH_DIFFICULTY = '/difficulty';

const ROUTES = [{
    path: PATH_APP,
    element: <App />,
}, {
    path: PATH_DIFFICULTY,
    element: <Difficulty />,
}];

export default ROUTES;