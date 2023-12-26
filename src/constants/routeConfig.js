import Home from '../components/Home';
import Difficulty from '../components/Difficulty';
import Instructions from '../components/Instructions';
import Question from '../components/Question';
import Summary from '../components/Summary';
import * as paths from './paths';
import { DARK_THEME } from './theme';

const routeConfig = [{
    path: paths.PATH_HOME,
    Component: Home,
}, {
    path: paths.PATH_DIFFICULTY,
    Component: Difficulty,
}, {
    path: paths.PATH_INSTRUCTIONS,
    Component: Instructions,
}, {
    path: paths.PATH_QUESTION,
    Component: Question,
    theme: DARK_THEME,
}, {
    path: paths.PATH_SUMMARY,
    Component: Summary,
}];

export default routeConfig;
