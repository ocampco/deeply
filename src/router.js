import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import routeConfig from './constants/routeConfig';
import { PATH_BASE } from './constants/paths';

const routes = routeConfig.map(
    ({ path, Component, themeOverride }) => ({
        path,
        element: (
            <Layout themeOverride={themeOverride}>
                <Component />
            </Layout>
        ),
    })
);

const options = {
    basename: PATH_BASE,
}

const router = createBrowserRouter(routes, options);

export default router;