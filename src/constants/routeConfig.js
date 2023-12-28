import Home from '../components/Home';
import CategoryContainer from '../components/CategoryContainer';
import Instructions from '../components/Instructions';
import Question from '../components/Question';
import Summary from '../components/Summary';
import * as paths from './paths';

const routeConfig = [{
    path: paths.PATH_HOME,
    Component: Home,
    theme: { center: true }
}, {
    path: paths.PATH_CATEGORY,
    Component: CategoryContainer,
    theme: { full: true },
}, {
    path: paths.PATH_INSTRUCTIONS,
    Component: Instructions,
}, {
    path: paths.PATH_QUESTION,
    Component: Question,
    theme: { secondary: true },
}, {
    path: paths.PATH_SUMMARY,
    Component: Summary,
}];

export default routeConfig;
