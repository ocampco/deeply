import {
    ScrollRestoration,
    createBrowserRouter,
} from 'react-router-dom';
import Layout from './components/Layout';
import routeConfig from './constants/routeConfig';
import { PATH_BASE } from './constants/paths';

const routes = routeConfig.map(
    ({ path, Component, theme }) => ({
        path,
        element: (
            <Layout theme={theme}>
                <Component />
                <ScrollRestoration />
            </Layout>
        ),
    })
);

const options = {
    basename: PATH_BASE,
}

const router = createBrowserRouter(routes, options);

export default router;
