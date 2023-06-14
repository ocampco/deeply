import Layout from '../components/Layout';
import routeConfig from './routeConfig';

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

export default routes;