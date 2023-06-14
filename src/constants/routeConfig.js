import Home from '../components/Home';
import Difficulty from '../components/Difficulty';
import Instructions from '../components/Instructions';
import Question from '../components/Question';
import Summary from '../components/Summary';
import { CENTER_THEME, DARK_THEME } from './theme';

export const PATH_DIFFICULTY = '/difficulty';
export const PATH_INSTRUCTIONS = '/instructions';
export const PATH_QUESTION_SEGMENT = '/questions';
export const PATH_SUMMARY = '/summary';
export const PATH_DONATE = 'https://www.buymeacoffee.com/ocampco';

const PATH_HOME = '/';
const PATH_QUESTION = `${PATH_QUESTION_SEGMENT}/:difficulty`;

const routes = [{
    path: PATH_HOME,
    Component: Home,
    themeOverride: CENTER_THEME,
}, {
    path: PATH_DIFFICULTY,
    Component: Difficulty,
}, {
    path: PATH_INSTRUCTIONS,
    Component: Instructions,
}, {
    path: PATH_QUESTION,
    Component: Question,
    themeOverride: { ...DARK_THEME, ...CENTER_THEME },
}, {
    path: PATH_SUMMARY,
    Component: Summary,
}];

export default routes;